import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cyber-background text-cyber-text">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="mt-20 bg-cyber-secondary bg-opacity-20 backdrop-filter backdrop-blur-lg border border-cyber-accent">
            <CardHeader>
              <CardTitle className="text-cyber-accent">
                <h1 className="text-4xl font-bold text-center mb-12 text-cyber-accent cyber-glitch">CONTACT</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
              <p className="mb-4 text-cyber-text flex flex-col justify-center items-center"><a href='mailto:alx@oct-n-shrk.studio'>alx@oct-n-shrk.studio</a></p>
              <p className="mb-4 text-cyber-text flex flex-col justify-center items-center"><a href='mailto:b3l4@oct-n-shrk.studio'>b3l4@oct-n-shrk.studio</a></p>
              <p className="text-cyber-text flex flex-col justify-center items-center"><a href='mailto:booking@oct-n-shrk.studio'>booking@oct-n-shrk.studio</a></p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
