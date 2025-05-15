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
    <div style={{ textAlign: 'center', padding: '10px 10px',  backgroundColor: '#fcf7f0', fontFamily: "'Great Vibes', sans-serif"}}>
      <h1 style={{ fontSize: '2.2rem', padding: '20 20', margin: '0', color: '#8c78b7'}}>Wieczór Panieński Wery</h1>
      <h1 style={{ fontSize: '1.6rem', padding: '10', margin: '0', color: '#8c78b7' }}>Pokaż jak się bawisz!</h1>

      {/* Always visible uploader */}
      <ImageUploader code={codeParam} />

      {/* Toggle button */}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => setShowGallery((prev) => !prev)}
          style={{
            padding: '10px 10px',
            fontSize: '20px',
            minWidth: '145px',
            fontFamily: "'Great Vibes', sans-serif", 
            borderRadius: '8px',
            backgroundColor: showGallery ? '#8c78b7' : '#8c78b7',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {showGallery ? 'Ukryj galerię' : 'Pokaż galerię'}
        </button>
      </div>
      {/* ✅ Static image under the button */}

        <div>
          <img
            src={process.env.PUBLIC_URL + '/images/baner.png'} // Replace with your actual image path
            alt="Decorative"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
          />
        </div>

      {/* Conditionally rendered gallery */}
      {showGallery && (
        <div style={{ marginTop: '5px' }}>
          <Gallery />
        </div>
      )}
    </div>
  );
}

export default App;
