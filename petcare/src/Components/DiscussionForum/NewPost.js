import React, { useState, useContext } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { ForumContext } from './ForumContext';
import '../Styles/Forum.css';

function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const { addPost } = useContext(ForumContext);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('Title and content are required.');
      return;
    }
    const newPost = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      file,
      replies: []
    };
    addPost(newPost);
    setTitle('');
    setContent('');
    setFile(null);
  };

  return (
    <Box className="new-post-form">
      <Typography variant="h5" className="new-post-title">Create a New Post</Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        fullWidth
        className="text-field"
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        className="text-field"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="file-input"
      />
      <Button onClick={handleSubmit} variant="contained" color="primary" className="submit-button">
        Post
      </Button>
    </Box>
  );
}

export default NewPost;
