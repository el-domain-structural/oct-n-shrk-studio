import React from 'react';
import Footer from '../components/Footer';
import ShaderCanvas from '../components/ShaderCanvas';
import '../styles/Performing.css';
import { InstagramEmbed } from 'react-social-media-embed';

const Performing = () => {
  return (
    <div className="explore-future-container">
      <div className="explore-future-content">
        <h1 className="explore-future-title cyber-glitch">Up Soon :</h1>
        <div className="explore-future-shader">
          <ShaderCanvas />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/C6l2-9rLLKH/" width={328} />
        </div>
        {/* <p className="explore-future-text">
          Main Gigs ( 2024 / 2025 )
        </p>
        <div className="explore-future-features">
          <div className="feature">
            <h2>Nov. Europ. Rave Dj-Set</h2>
            <p><a href="https://ravethisway.org">Secret Location</a></p>
          </div>
          <div className="feature">
            <h2>NY. French Alps. Club Dj-Set</h2>
            <p><a href="https://en.wikipedia.org/wiki/Sainte-Foy-Tarentaise">STATION St. Foy</a></p>
          </div>
          <div className="feature">
            <h2>Spring Live-Act - Rave Live-Set</h2>
            <p><a href="https://ravethisway.org">Secret Location</a></p>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Performing;