import React, { useState } from 'react';
import JsonToJava from '../components/JsonToJava';
import JavaToJson from '../components/JavaToJson';
import '../css/Playground.css'; 

function Playground() {
  const [mode, setMode] = useState('jsonToJava');

  return (
    <div className="playground-container">
      <h2>Playground</h2>
      <div className="toggle-buttons">
        <button
          className={mode === 'jsonToJava' ? 'active' : ''}
          onClick={() => setMode('jsonToJava')}
        >
          JSON → Java
        </button>
        <button
          className={mode === 'javaToJson' ? 'active' : ''}
          onClick={() => setMode('javaToJson')}
        >
          Java → JSON
        </button>
      </div>
      <div>
        {mode === 'jsonToJava' ? <JsonToJava /> : <JavaToJson />}
      </div>
    </div>
  );
}

export default Playground;
