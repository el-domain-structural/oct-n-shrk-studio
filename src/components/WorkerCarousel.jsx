import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const workers = [
  { id: 1, name: "Alice", role: "Unicorn Trainer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces" },
  { id: 2, name: "Bob", role: "Rainbow Painter", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces" },
  { id: 3, name: "Charlie", role: "Friendship Ambassador", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=faces" },
  { id: 4, name: "Diana", role: "Joy Spreader", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=faces" },
  { id: 5, name: "Ethan", role: "Magic Coordinator", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=faces" },
];

const WorkerCarousel = () => {
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {workers.map((worker) => (
          <CarouselItem key={worker.id}>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <img src={worker.image} alt={worker.name} className="w-24 h-24 rounded-full mb-4" />
                <h3 className="font-bold text-lg">{worker.name}</h3>
                <p className="text-sm text-gray-600">{worker.role}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default WorkerCarousel;