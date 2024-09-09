import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rainbow-red via-rainbow-yellow to-rainbow-violet">
      <Navigation />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">About GOOD FRIENDS FOUNDATION</h1>
          <Card className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-rainbow-indigo">Our Magical Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-rainbow-blue">
                The GOOD FRIENDS FOUNDATION was established in 2023 by a group of unicorn enthusiasts and rainbow chasers. Our mission is simple yet powerful: to spread joy, friendship, and magical experiences throughout the world.
              </p>
              <p className="mb-4 text-rainbow-green">
                We believe that the power of friendship, combined with the magic of unicorns and the beauty of rainbows, can transform communities and inspire positive change. Through our various enchanted programs and sparkling initiatives, we aim to foster connections, encourage empathy, and inspire collective action towards creating a more colorful and harmonious world.
              </p>
              <p className="text-rainbow-violet">
                Join us on this magical journey to create a world where every individual feels supported, valued, and connected. Together, we can make a difference, one rainbow at a time!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;