import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846", alt: "Friends laughing together" },
  { id: 2, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac", alt: "Group of friends jumping" },
  { id: 3, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18", alt: "Community gathering" },
  { id: 4, src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a", alt: "Volunteer work" },
  { id: 5, src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a", alt: "Friends at sunset" },
  { id: 6, src: "https://images.unsplash.com/photo-1536337005238-94b997371b40", alt: "Group celebration" },
];

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <Card key={photo.id} className="overflow-hidden">
          <CardContent className="p-0">
            <img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PhotoGallery;