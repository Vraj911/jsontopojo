import React from 'react';
function Textarea({
  label,
  value,
  onChange,
  placeholder,
  readOnly = false,
  isOutput = false,
  onCopy,
  showCopy = false,
  copyStatus = ''
}) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>{label}</h4>
        {showCopy && (
          <button onClick={onCopy} style={{ fontSize: '0.9rem' }}>
            📋 Copy
          </button>
        )}
      </div>
      {copyStatus && <div style={{ color: 'green', fontSize: '0.85rem' }}>{copyStatus}</div>}

      {isOutput ? (
        <pre className="output-box">{value || '// No output yet'}</pre>
      ) : (
        <textarea
          rows={10}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="json-input"
        />
      )}
    </div>
  );
}

export default Textarea;
