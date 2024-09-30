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
              <p className="text-cyber-text flex flex-col justify-center items-center">
                <a href='https://linktr.ee/Octo_Shark'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" height="16px" style="display: block; width: auto;">
                        <path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 
                        8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 
                        17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 
                        11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 
                        5.85343V0H13.5108V5.85343ZM10.038 
                        16.16H13.5108V24.0019H10.038V16.16Z" fill="#000000"></path>
                    </svg>
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
