import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from '../components/Navigation';
import PhotoGallery from '../components/PhotoGallery';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-white">
      <Navigation />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">GOOD FRIENDS FOUNDATION</h1>
          <div className="animate-unicorn-fly mb-8">
            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32" alt="Flying Unicorn" className="w-32 h-32 mx-auto" />
          </div>
          <Card className="mb-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-rainbow-indigo">Our Magical Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-rainbow-blue">
                The GOOD FRIENDS FOUNDATION is dedicated to spreading joy, friendship, and rainbow magic throughout the world. We believe that unicorns, rainbows, and the power of friendship can create a more colorful and harmonious society.
              </p>
              <Button className="bg-rainbow-violet hover:bg-rainbow-indigo text-white">Discover the Magic</Button>
            </CardContent>
          </Card>
          <h2 className="text-2xl font-semibold mb-4 text-red-700">Our Enchanted Gallery</h2>
          <PhotoGallery />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;