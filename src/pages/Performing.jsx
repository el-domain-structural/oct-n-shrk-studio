import React from 'react';
import Footer from '../components/Footer';
import ShaderCanvas from '../components/ShaderCanvas';
import '../styles/Performing.css';

const Performing = () => {
  return (
    <div className="explore-future-container">
      <div className="explore-future-content">
        <h1 className="explore-future-title cyber-glitch">Performing</h1>
        <div className="explore-future-shader">
          {/* <ShaderCanvas /> */}

          <iframe id="µ3D_CUBE" src="https://octosharkmusic.github.io/events/" width="100%" height="333px" title="Floating Cube" scrolling="no" frameborder="0" sandbox="allow-same-origin allow-forms allow-scripts"></iframe>
              
        </div>
        <p className="explore-future-text">
          Welcome to the cutting edge of cybernetic innovation. Here, we push the boundaries of human-machine interaction,
          exploring new frontiers in artificial intelligence, neural interfaces, and augmented reality.
        </p>
        <div className="explore-future-features">
          <div className="feature">
            <h2>AI Integration</h2>
            <p>Discover how AI is reshaping our world and enhancing human capabilities.</p>
          </div>
          <div className="feature">
            <h2>Neural Interfaces</h2>
            <p>Explore direct brain-computer connections that unlock new potentials.</p>
          </div>
          <div className="feature">
            <h2>Augmented Reality</h2>
            <p>Experience a world where digital and physical realities seamlessly merge.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Performing;