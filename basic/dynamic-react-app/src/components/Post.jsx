import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams(); // Get post ID from URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) throw new Error("Post not found");
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div><h2>Post Not Found</h2></div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
