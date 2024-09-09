import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About GOOD FRIENDS FOUNDATION</h1>
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The GOOD FRIENDS FOUNDATION was established in 2023 with a simple yet powerful mission: to promote friendship and community support as catalysts for positive change in society.
              </p>
              <p className="mb-4">
                We believe that strong friendships and community bonds are the cornerstone of a better world. Through our various programs and initiatives, we aim to foster connections, encourage empathy, and inspire collective action towards common goals.
              </p>
              <p>
                Join us in our mission to create a world where every individual feels supported, valued, and connected. Together, we can make a difference, one friendship at a time.
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