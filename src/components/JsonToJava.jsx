import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Textarea from './Textarea.jsx';
import ControlButtons from './ControlButtons.jsx';
import DownloadButton from './DownloadButton.jsx';
import FieldModifierPanel from './FieldModifierPanel.jsx';
import '../css/JavaToJson.css';
import { sampleJava,sampleJson } from '../sample/sampleData.js';
function JsonToJava() {
  const [jsonInput, setJsonInput] = useState('');
  const [javaOutput, setJavaOutput] = useState('');
  const [error, setError] = useState('');
  const [copyMsg, setCopyMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState([]); 
  const [modifiers, setModifiers] = useState({}); 
  const BACKEND_URL =import.meta.env.VITE_BACKEND_URL; 
  useEffect(() => {
    try {
      const parsed = JSON.parse(jsonInput);
      const keys = Object.keys(parsed);
      setFields(keys);
      const defaultModifiers = {};
      keys.forEach((key) => {
        defaultModifiers[key] = 'private'; 
      });
      setModifiers(defaultModifiers);
    } catch {
      setFields([]);
      setModifiers({});
    }
  }, [jsonInput]);
  const handleModifierChange = (field, newModifier) => {
    setModifiers((prev) => ({ ...prev, [field]: newModifier }));
  };
  const handleConvert = async () => {
  setError('');
  setJavaOutput('');
  setLoading(true);
  try {
    const parsedJson = JSON.parse(jsonInput); 
    const payload = {
      jsonObject: parsedJson, 
      modifiers: modifiers,
    };
    const response = await axios.post(
      BACKEND_URL,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.data) {
      setJavaOutput(response.data);
    } else {
      setError('No Java output received');
    }
  } catch (err) {
    console.error(err);
    setError('Error during conversion. Check server or input.');
  }
  setLoading(false);
};
const loadSample = () => {
  const formattedJson = JSON.stringify(sampleJson, null, 2);
  setJsonInput(formattedJson); 
  setJavaOutput(sampleJava);   
  setError('');
  setCopyMsg('');
};
  const clearAll = () => {
    setJsonInput('');
    setJavaOutput('');
    setError('');
    setCopyMsg('');
    setFields([]);
    setModifiers({});
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(javaOutput);
    setCopyMsg('Copied ✅');
    setTimeout(() => setCopyMsg(''), 1500);
  };
  return (
    <div className="container">
      <h3>JSON to Java POJO</h3>
      <Textarea
        label="JSON Input"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder="Paste your JSON here..."/>
      {fields.length > 0 && (
        <FieldModifierPanel
          fields={fields}
          modifiers={modifiers}
          onChange={handleModifierChange}/>
      )}
      <ControlButtons
        onConvert={handleConvert}
        onLoadSample={loadSample}
        onClear={clearAll} />
      {error && <div className="error">{error}</div>}
      {loading && <div className="loading">Converting...</div>}
      <h4>Java Output</h4>
      {javaOutput && (
        <div className="button-group">
          <button onClick={handleCopy}>📋 Copy</button>
          <DownloadButton content={javaOutput} filename="JavaOutput.java" />
        </div>
      )}
      <pre>{javaOutput}</pre>
      {copyMsg && <div className="copy-msg">{copyMsg}</div>}
    </div>
  );
}
export default JsonToJava;
