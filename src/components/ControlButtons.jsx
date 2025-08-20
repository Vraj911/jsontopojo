// components/ControlButtons.js
import React from 'react';

function ControlButtons({ onConvert, onLoadSample, onClear }) {
  return (
    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
      <button onClick={onConvert}>Convert</button>
      <button onClick={onLoadSample} style={{ backgroundColor: '#6c757d' }}>
        Load Sample
      </button>
      <button onClick={onClear} style={{ backgroundColor: '#dc3545' }}>
        Clear
      </button>
    </div>
  );
}

export default ControlButtons;
