// components/ImageUploader.tsx
import React, { useState, ChangeEvent } from 'react';

interface Props {
  code: string | null;
}

export default function ImageUploader({ code }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    if (!selected || !selected.type.startsWith('image/')) {
      setStatus('Please select a valid image.');
      setFile(null);
      return;
    }
    setFile(selected);
    setStatus('');
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus('No file selected.');
      return;
    }

    setStatus('Uploading to backend...');

    const form = new FormData();
    form.append('file', file);
    
    const headers: Record<string,string> = {};
    if (code) {
      headers['X-Auth-Code'] = code;
    }
    console.log(headers)

    try {
      const res = await fetch('https://weraimati.ddns.net/api/upload', {
        method: 'POST',
        headers,
        body: form,
      });

      if (res.ok) {
        setStatus('Upload successful! The image will be in the gallery soon!');
      } else {
        const err = await res.json();
        setStatus(`Upload failed: ${err.message || res.statusText}`);
      }
    } catch (error: any) {
      setStatus(`Upload error: ${error.message}`);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginTop: '1rem' }}>
        Upload to Backend
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}
