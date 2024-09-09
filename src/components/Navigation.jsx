import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { navItems } from '../nav-items';

const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-rainbow-red via-rainbow-yellow to-rainbow-violet animate-rainbow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-white">GOOD FRIENDS</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Button key={item.to} asChild variant="ghost" className="text-white hover:bg-white hover:bg-opacity-20">
                  <Link to={item.to} className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;