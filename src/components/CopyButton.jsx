import React from 'react';
function CopyButton({ textToCopy, onCopyStatus }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      onCopyStatus('✅ Copied to clipboard!');
      setTimeout(() => onCopyStatus(''), 2000);
    } catch (err) {
      onCopyStatus('❌ Failed to copy.');
    }
  };
  return (
    <button className="copy-button" onClick={handleCopy}>
      Copy
    </button>
  );
}
export default CopyButton;
