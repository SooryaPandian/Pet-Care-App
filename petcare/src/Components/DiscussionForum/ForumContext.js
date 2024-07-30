import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token'); // Get the token from localStorage

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const addPost = async (post) => {
    try {
      await axios.post('http://localhost:5000/api/posts', post, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchPosts(); // Refresh posts after adding a new one
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const addReply = async (postId, reply) => {
    try {
      await axios.post(`http://localhost:5000/api/posts/${postId}/replies`, reply, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchPosts(); // Refresh posts after adding a new reply
    } catch (error) {
      console.error('Error adding reply:', error);
    }
  };

  return (
    <ForumContext.Provider value={{ posts, fetchPosts, addPost, addReply }}>
      {children}
    </ForumContext.Provider>
  );
};
