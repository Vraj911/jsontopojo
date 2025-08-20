import React from 'react';
import '../css/Modifier.css';
function ModifierSelector({ value, onChange }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option value="private">private</option>
      <option value="public">public</option>
      <option value="protected">protected</option>
      <option value="default">default (no modifier)</option>
    </select>
  );
}

export default ModifierSelector;
