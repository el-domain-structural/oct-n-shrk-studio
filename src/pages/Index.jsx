import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from '../components/Navigation';
import PhotoGallery from '../components/PhotoGallery';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">GOOD FRIENDS FOUNDATION</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The GOOD FRIENDS FOUNDATION is dedicated to fostering friendship, community support, and positive change in society. We believe that strong friendships and community bonds are the foundation of a better world.
              </p>
              <Button>Learn More</Button>
            </CardContent>
          </Card>
          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <PhotoGallery />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;