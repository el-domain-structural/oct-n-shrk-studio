import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogPostPreview = ({ post }) => {
  return (
    <Card className="overflow-hidden">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{post.excerpt}</p>
      </CardContent>
    </Card>
  );
};

export default BlogPostPreview;