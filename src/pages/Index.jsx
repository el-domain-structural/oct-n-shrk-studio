import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import PhotoGallery from '../components/PhotoGallery';
import Footer from '../components/Footer';
import ShaderCanvas from '../components/ShaderCanvas';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-background text-cyber-text">
      <Navigation />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-cyber-accent cyber-glitch">CYBERNETIC FOUNDATION</h1>
          <Card className="mb-8 bg-cyber-secondary bg-opacity-20 backdrop-filter backdrop-blur-lg border border-cyber-accent">
            <CardHeader>
              <CardTitle className="text-cyber-accent">Our Digital Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-cyber-text">
                The CYBERNETIC FOUNDATION is dedicated to advancing the fusion of humanity and technology. We believe that through cybernetic enhancements and digital interconnectivity, we can create a more advanced and harmonious society.
              </p>
              <Button className="bg-cyber-accent hover:bg-cyber-text hover:text-cyber-background text-cyber-background" asChild>
                <Link to="/explore-future">Explore the Future</Link>
              </Button>
            </CardContent>
          </Card>
          <h2 className="text-2xl font-semibold mb-4 text-cyber-accent">Digital Nexus</h2>
          <ShaderCanvas />
          <h2 className="text-2xl font-semibold my-8 text-cyber-accent">Our Digital Gallery</h2>
          <PhotoGallery />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
