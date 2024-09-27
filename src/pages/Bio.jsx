import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from '../components/Footer';

const Bio = () => {
  return (
    <div className="min-h-screen bg-cyber-background text-cyber-text">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-cyber-secondary bg-opacity-20 backdrop-filter backdrop-blur-lg border border-cyber-accent">
            <CardHeader>
              <CardTitle className="text-cyber-accent">
                <h1 className="text-4xl font-bold text-center mb-12 text-cyber-accent cyber-glitch">OCTO&SHARK</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-cyber-text">
              Alex and Bela on the Decks is a magical Experience. They have shown us how versatile, creative and fun a musical experience can be through their DJ sets, and how powerful the music can be to create unity between one another.  
              </p>
              <p className="mb-4 text-cyber-text">
              French Djs and Music producers since 2008. Coming from the underground European Rave scene, they’ve then been playing all over the world bringing new influences into their music.
              </p>
              <p className="text-cyber-text">
              They build their live music with their full intuitiveness as they carve raw material from synthesis. Each live performance lies between strong grooves influenced by house music and cinematic hypnotic sounds of underground techno.🌟 Members of Nolimit Soundsystem.
              </p>
              <p className="text-cyber-text">
              They have released music on the Berliner Label Drosssel featuring a track with the famous Salvador Araguaya and Meraki. And on Tikal Sound Records famous for realeasing the best of European underground Techno.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bio;
