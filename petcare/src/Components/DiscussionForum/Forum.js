import React, { useContext, useState, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { ForumContext } from './ForumContext';
import ForumList from './ForumList';
import '../Styles/Forum.css';
import { useNavigate } from 'react-router-dom';

const Forum = () => {
  const { posts, addPost, fetchPosts } = useContext(ForumContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const username = localStorage.getItem('username'); // Get the username from localStorage
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/login');
    } else {
      fetchPosts();
    }
  }, [fetchPosts, username, navigate]);

  const handlePost = () => {
    if (title && content) {
      addPost({ title, content, image, username });
      setTitle('');
      setContent('');
      setImage(null);
    } else {
      alert("Please fill out the title and content fields.");
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className="forum-container">
      <Box className="new-post-form">
        <Typography variant="h4" className="new-post-title">Create a New Post</Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-field"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePost}
          className="submit-button"
        >
          Post
        </Button>
      </Box>
      <Typography variant="h4" className="forum-list-title">Forum Posts</Typography>
      <ForumList />
    </Container>
  );
};

export default Forum;
