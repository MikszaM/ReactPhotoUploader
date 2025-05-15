import React, { useEffect, useState } from 'react';
import ImageUploader from './components/ImageUploader';
import Gallery from './components/Gallery';

function App() {
  const [codeParam, setCodeParam] = useState<string | null>(null);
  const [showGallery, setShowGallery] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCodeParam(params.get('code'));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Drive Image Uploader</h1>

      {/* Always visible uploader */}
      <ImageUploader code={codeParam} />

      {/* Toggle button */}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => setShowGallery((prev) => !prev)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '8px',
            backgroundColor: showGallery ? '#6c757d' : '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {showGallery ? 'Hide Gallery' : 'View Gallery'}
        </button>
      </div>

      {/* Conditionally rendered gallery */}
      {showGallery && (
        <div style={{ marginTop: '30px' }}>
          <Gallery />
        </div>
      )}
    </div>
  );
}

export default App;
