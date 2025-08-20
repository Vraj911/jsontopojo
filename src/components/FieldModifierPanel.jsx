import React from 'react';
import ModifierSelector from './ModifierSelector';

function FieldModifierPanel({ fields, modifiers, onChange }) {
  return (
    <div>
      <h3>Select Access Modifiers:</h3>
      {fields.map(field => (
        <div key={field}>
          <label>{field}: </label>
          <ModifierSelector
            value={modifiers[field]}
            onChange={newMod => onChange(field, newMod)}
          />
        </div>
      ))}
    </div>
  );
}

export default FieldModifierPanel;
