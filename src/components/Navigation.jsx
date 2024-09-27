import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { navItems } from '../nav-items';
import MobileMenu from './MobileMenu';
import AudioPlayer from './AudioPlayer';

const Navigation = () => {
  return (
    <nav className="bg-cyber-background border-b border-cyber-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="https://oct-n-shrk.studio/" className="font-bold text-xl text-cyber-text cyber-glitch">OCTO&SHARK STUDIO</a>
          </div>
          <AudioPlayer />
          <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
            {navItems.map((item) => (
              <Button key={item.to} asChild variant="ghost" className="w-1/6 text-cyber-text hover:text-cyber-accent hover:opaciy-75 hover:blur-sm hover:backdrop-invert-0 hover:bg-red/15">
                <Link to={item.to} className="inline-flex items-center p-2 text-md font-bold">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
