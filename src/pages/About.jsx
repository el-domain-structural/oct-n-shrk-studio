import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About African Adventures</h1>
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                African Adventures is dedicated to showcasing the beauty, diversity, and rich cultural heritage of the African continent. Our mission is to inspire travelers to explore the wonders of Africa, from its breathtaking landscapes to its vibrant cities and ancient historical sites.
              </p>
              <p className="mb-4">
                Through our blog, we aim to provide valuable insights, travel tips, and firsthand experiences to help you plan your perfect African adventure. Whether you're dreaming of a safari in the Serengeti, climbing Mount Kilimanjaro, or exploring the ancient pyramids of Egypt, we're here to guide you every step of the way.
              </p>
              <p>
                Join us on this incredible journey as we uncover the hidden gems and must-see destinations across Africa. Let's embark on unforgettable adventures together!
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
