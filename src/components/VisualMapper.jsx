import React from 'react';
import '../css/VisualMapper.css'; 
function VisualMapper({ json, java }) {
  return (
    <div className="visual-mapper">
      <h5>Visual Mapping (Coming Soon)</h5>
      <div className="visual-mapper-content">
        <pre>{json}</pre>
        <pre>{java}</pre>
      </div>
    </div>
  );
}
export default VisualMapper;
