import React, { useState } from 'react';
import axios from 'axios';
import Textarea from './Textarea.jsx';
import ControlButtons from './ControlButtons.jsx';
import DownloadButton from './DownloadButton.jsx';
import { sampleJava, sampleJson } from '../sample/sampleData.js';
import '../css/JavaToJson.css';
function JavaToJson() {
  const [javaInput, setJavaInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const [error, setError] = useState('');
  const [copyMsg, setCopyMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const handleConvert = async () => {
    setError('');
    setJsonOutput('');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/java/java-to-json', javaInput, {
        headers: { 'Content-Type': 'text/plain' },
      });
      if (response.data) {
        setJsonOutput(JSON.stringify(response.data, null, 2));
      } else {
        setError('No JSON output received');
      }
    } catch (err) {
      console.error(err);
      setError('Error during conversion. Check server or input.');
    }
    setLoading(false);
  };
  const clearAll = () => {
    setJavaInput('');
    setJsonOutput('');
    setError('');
    setCopyMsg('');
  };
  const loadSample = () => {
  setJavaInput(sampleJava);
  setJsonOutput(JSON.stringify(sampleJson, null, 2));
  setError('');
  setCopyMsg('');
};

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonOutput);
    setCopyMsg('Copied ✅');
    setTimeout(() => setCopyMsg(''), 1500);
  };
  return (
    <div className="container">
      <h3>Java Pojo to JSON</h3>
      <Textarea
        label="Java Class Input"
        value={javaInput}
        onChange={(e) => setJavaInput(e.target.value)}
        placeholder="Paste your Java class here..."
      />
      <ControlButtons
        onConvert={handleConvert}
        onLoadSample={loadSample}
        onClear={clearAll}
      />
      {error && <div className="error">{error}</div>}
      {loading && <div className="loading">Converting...</div>}

      <h4>JSON Output</h4>
      {jsonOutput && (
        <div className="button-group">
          <button onClick={handleCopy}>📋 Copy</button>
          <DownloadButton content={jsonOutput} filename="JsonOutput.json" />
        </div>
      )}
      <pre>{jsonOutput}</pre>
      {copyMsg && <div className="copy-msg">{copyMsg}</div>}
    </div>
  );
}
export default JavaToJson;
