import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Castle360View = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const loadViewer = async () => {
      const { Viewer } = await import('@photo-sphere-viewer/core');
      
      new Viewer({
        container: viewerRef.current,
        panorama: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg', // Replace with your actual 360 castle image
        navbar: 'zoom move fullscreen',
        defaultZoomLvl: 0,
        minFov: 50,
        maxFov: 120,
      });
    };

    loadViewer();
  }, []);

  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden">
      <CardContent className="p-0">
        <div ref={viewerRef} style={{ width: '100%', height: '400px' }} />
      </CardContent>
    </Card>
  );
};

export default Castle360View;