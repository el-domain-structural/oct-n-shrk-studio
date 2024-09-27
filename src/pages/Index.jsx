import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';
import Footer from '../components/Footer';
import ShaderCanvas from '../components/ShaderCanvas';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-background text-cyber-text">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* <h1 className="text-4xl font-bold text-center mb-12 text-cyber-accent cyber-glitch scale-[0.63]">OCTO&SHARK STUDIO</h1> */}
          <Card className="px-14 mb-8 bg-cyber-secondary bg-opacity-20 backdrop-filter backdrop-blur-lg border-[3px] border-cyber-accent hover:border-2 hover:border-cyber-secondary transition duration-75 hover:duration-300 scale-[0.83]">
            {/* <CardHeader>
              <CardTitle className="text-cyber-accent">When & Where can you catch the band</CardTitle>
            </CardHeader> */}
            <CardContent className="justify-center flex flex-col p-4 m-0.5">
              <p className="mb-4 text-cyber-text rounded-xl flex justify-center">
                <iframe className="rounded-xl mt-6 mb-3 p-1 backdrop-opacity-60 backdrop-invert bg-white/30 mix-blend-luminosity z-0" id="µ3D_CUBE_oct-n-shrk" src="https://octosharkmusic.github.io/" width="94%" height="420px" title="Floating Cube - O&S" scrolling="no" frameborder="0" sandbox="allow-same-origin allow-forms allow-scripts"></iframe>
              </p>
              <Button className="bg-cyber-accent hover:bg-cyber-text hover:text-cyber-background text-cyber-background" asChild>
                <Link to="/performing">Performing</Link>
              </Button>
            </CardContent>
          </Card>
          <h2 className="text-2xl font-semibold mb-4 text-cyber-accent">What is Coming Soon-ishhh'</h2>
          <ShaderCanvas />
          <h2 className="text-2xl font-semibold my-8 text-cyber-accent">Media Gallery</h2>
          <PhotoGallery />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
