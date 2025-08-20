import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
function Home() {
  return (
    <div className="home-container">
      <h1>JsonToPojo</h1>
      <p>
        Convert between JSON and Java POJOs. Visualize mappings and learn serialization!
      </p>
      <Link to="/playground" className="playground-link">
              <button>Go to Playground</button>
      </Link>
    </div>
  );
}
export default Home;
