import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-cyber-background text-cyber-text">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-cyber-accent cyber-glitch">About OCTO&SHARK STUDIO</h1>
          <Card className="bg-cyber-secondary bg-opacity-20 backdrop-filter backdrop-blur-lg border border-cyber-accent">
            <CardHeader>
              <CardTitle className="text-cyber-accent">Our Digital Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-cyber-text">
                The OCTO&SHARK STUDIO was established in 2023 by a group of visionary technologists and futurists. Our mission is to advance the fusion of humanity and technology, pushing the boundaries of what's possible in the digital age.
              </p>
              <p className="mb-4 text-cyber-text">
                We believe that through Octo & Shark enhancements and digital interconnectivity, we can create a more advanced and harmonious society. Our work spans various fields, including artificial intelligence, neural interfaces, and augmented reality.
              </p>
              <p className="text-cyber-text">
                Join us on this cutting-edge journey to shape the future of human-machine interaction. Together, we can build a world where technology amplifies human potential and creates new possibilities for all.
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
