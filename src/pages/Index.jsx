import React from 'react';
import BlogPostPreview from '../components/BlogPostPreview';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "Exploring the Serengeti: A Safari Adventure",
    excerpt: "Discover the wonders of Tanzania's Serengeti National Park, home to the great wildebeest migration.",
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "Climbing Mount Kilimanjaro: A Journey to the Roof of Africa",
    excerpt: "Experience the thrill of ascending Africa's highest peak and witness breathtaking views from the summit.",
    imageUrl: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "Exploring the Ancient Pyramids of Egypt",
    excerpt: "Uncover the mysteries of ancient Egypt as you visit the iconic pyramids and Sphinx in Giza.",
    imageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">African Adventures Travel Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostPreview key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
