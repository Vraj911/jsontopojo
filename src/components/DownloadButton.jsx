// DownloadButton.jsx

import React from 'react';

function DownloadButton({ jsonText, fileName = 'output.json' }) {
  const handleDownload = () => {
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // cleanup
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Download JSON
    </button>
  );
}

export default DownloadButton;
