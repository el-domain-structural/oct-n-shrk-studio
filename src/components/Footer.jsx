import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ShaderCanvas from './ShaderCanvas';

const Footer = () => {
  return (
    <footer className="bg-cyber-background py-6 w-screen mt-12 relative mix-blend-color-dodge opacity-95 brightness-125 scale-95 hover:scale-90 transition-all">
      <div className="absolute inset-2 z-0">
        <ShaderCanvas />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center relative z-10">
        <Button asChild className="bg-cyber-accent hover:bg-cyber-text hover:text-cyber-background text-cyber-background saturate-200 hover:blur-sm">
          <Link to="/bio">BIOGRAPHY</Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
