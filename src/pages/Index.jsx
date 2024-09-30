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
      <div className="fullscreen-video-container">
        <video autoplay loop muted>
          <source src="https://download.eu-west-3.fromsmash.co/transfer/gDVaXLOyqO-ct/file/134bf7410f643111747390d74e20102024a78950?identity=469c1812f810faa3f1319449fdf6dc6c-d610981fa7c59449c7f3170752c6a252b9a0cb4e57fcbde9a146df1c2e2842805aa04d7ee0c9e34caef22f446def453c0f9051ac69271bdfb81a3273998e47d2da607425db3f11e84588cb67d8b8420d&Expires=1727672088&Key-Pair-Id=APKAIM76HR2FWFZRN3HA&Signature=ToktO5UubpXEsIwaWrWEvxVaOE8TwLgcpuP5zRMT-gzcQsdDHeph~cURMhm4qZeHuat-C4HeVbzxAISQ6fa9qUmTafPK2sl4dZ6TvhSjFHBOR~Snb8e-ov9BnMoYVWXY2LBsVNnj~zPlvQUgr1nPjxHoB1yz4LpbBS4LtkJcMfzUC0oNTPKeJHbeqwBjBw69BxYjbHqmhGkZr2Z7NFfPyP5CIgXvlRQh4AGVM7QurEwccXZZD4DIDFadHuR-C8~X2gRRhYVTSqAG~8sqO2OGT3WfjSooJzFWPpnkc-Fhk~K8czwx~hHYzhdewXtMeBNJKdaVo0TICxEjlMCJ-SJwgg__" type="video/mp4" />
        </video>
        <div className="fullscreen-video-content">
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* <h1 className="text-4xl font-bold text-center mb-12 text-cyber-accent cyber-glitch scale-[0.63]">OCTO&SHARK STUDIO</h1> */}
              <Card className="p-4 mb-2 md:mb-4 bg-cyber-secondary bg-opacity-20 backdrop-filter backdrop-blur-lg border-[3px] border-cyber-accent hover:border-2 hover:border-cyber-secondary transition duration-75 hover:duration-300 scale-[0.86]">
                {/* <CardHeader>
                  <CardTitle className="text-cyber-accent">When & Where can you catch the band</CardTitle>
                </CardHeader> */}
                <CardContent className="justify-center items-center flex flex-col p-1 m-3">
                  {/* <p className="mb-4 text-cyber-text rounded-xl flex justify-center"> */}
                  <iframe className="m-6 p-1 rounded-xl backdrop-opacity-60 backdrop-invert hover:bg-white/30 bg-blue/50 mix-blend-luminosity z-0" id="µ3D_CUBE_oct-n-shrk" src="https://octosharkmusic.github.io/" width="94%" height="512px" title="Floating Cube - O&S" scrolling="no" frameborder="0" sandbox="allow-same-origin allow-forms allow-scripts"></iframe>
                  {/* </p> */}
                  <Button className="mt-2 bg-cyber-accent hover:bg-cyber-background hover:text-cyber-background hover:outline-4 hover:outline hover:outline-white text-cyber-background w-1/3" asChild>
                    <Link to="/performing">Performing</Link>
                  </Button>
                </CardContent>
              </Card>
              <div class="w-full my-4 py-4 scale-95">
              {/* <h2 className="text-2xl font-semibold mb-4 text-cyber-accent">Highlight</h2> */}
                <ShaderCanvas />
              </div>
              {/* <h2 className="text-2xl font-semibold my-8 text-cyber-accent">Media</h2> */}
              <div class="w-full my-4 py-4 scale-95">
                <PhotoGallery />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
