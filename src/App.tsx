// App.tsx
import React, { useEffect, useState } from 'react';
import ImageUploader from './components/ImageUploader';

function App() {
  const [codeParam, setCodeParam] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCodeParam(params.get("code"));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Drive Image Uploader</h1>
      <ImageUploader code={codeParam} />

      {/* Button just below the ImageUploader */}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => window.location.href = 'https://drive.google.com/drive/folders/1lyJMXpiwKXhPx6iv_K99PSG9umRrE6hk'}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '8px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Go to Link
        </button>
      </div>
    </div>
  );
}

export default App;