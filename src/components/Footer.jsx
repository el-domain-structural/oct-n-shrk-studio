import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <Button asChild>
          <Link to="/about">Learn More About Us</Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;