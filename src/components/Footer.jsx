import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ShaderCanvas from './ShaderCanvas';

const Footer = () => {
  return (
    <footer className="bg-cyber-background py-14 mt-12 relative">
      <div className="absolute inset-0 z-0">
        <ShaderCanvas />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center relative z-10">
        <Button asChild className="bg-cyber-accent hover:bg-cyber-text hover:text-cyber-background text-cyber-background">
          <Link to="/bio">BIOGRAPHY</Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
