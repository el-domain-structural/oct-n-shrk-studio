import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ShaderCanvas from './ShaderCanvas';

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(4)].map((_, index) => (
        <Card key={index} className="overflow-hidden transform transition duration-500 hover:scale-105">
          <CardContent className="p-0 h-48">
            <ShaderCanvas />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PhotoGallery;
