import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", alt: "Unicorn flying over rainbow" },
  { id: 2, src: "https://images.unsplash.com/photo-1535082049017-5a7b43f3bcef", alt: "Rainbow in the sky" },
  { id: 3, src: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c", alt: "Colorful unicorn painting" },
  { id: 4, src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7", alt: "Rainbow colored balloons" },
  { id: 5, src: "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c", alt: "Unicorn plush toy" },
  { id: 6, src: "https://images.unsplash.com/photo-1531325082793-ca7c9db6a4c1", alt: "Rainbow colored candy" },
];

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <Card key={photo.id} className="overflow-hidden transform transition duration-500 hover:scale-105">
          <CardContent className="p-0">
            <img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PhotoGallery;