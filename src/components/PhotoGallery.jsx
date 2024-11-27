import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card key={33} className="overflow-hidden transform transition duration-500 hover:scale-105">
        <CardContent className="p-0 h-60">
          <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/ALYZa90ZfJw" title="m44444t 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"  allowfullscreen="true"></iframe>
        </CardContent>
      </Card>
      <Card key={22} className="overflow-hidden transform transition duration-500 hover:scale-105">
        <CardContent className="p-0 h-60">
          <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/9rpXvwfJMTk" title="m44444t 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"  allowfullscreen="true"></iframe>
        </CardContent>
      </Card>
      <Card key={55} className="overflow-hidden transform transition duration-500 hover:scale-105">
        <CardContent className="p-0 h-60">
          <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/gF95C9P_9hE" title="m44444t 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"  allowfullscreen="true"></iframe>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoGallery;
