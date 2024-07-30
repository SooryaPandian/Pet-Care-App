import React, { useState, useContext } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { ForumContext } from './ForumContext';

const ForumPost = ({ post }) => {
  const { addReply } = useContext(ForumContext);
  const [reply, setReply] = useState('');
  const username = localStorage.getItem('username'); // Get the username from localStorage

  const handleReply = () => {
    if (reply) {
      addReply(post.id, { content: reply, username });
      setReply('');
    }
  };

  return (
    <Box className="forum-post">
      <Typography variant="h5" className="forum-post-title">{post.title}</Typography>
      <Typography variant="subtitle2" className="forum-post-username">Posted by: {post.username}</Typography>
      <Typography className="forum-post-content">{post.content}</Typography>
      {post.image && <img src={post.image} alt="Post" className="uploaded-image" />}
      <div className="reply-section">
        {post.replies.map((reply) => (
          <div key={reply.id}>
            <Typography variant="subtitle2" className="reply-username">Reply by: {reply.username}</Typography>
            <Typography className="reply">{reply.content}</Typography>
          </div>
        ))}
        <div className="reply-form">
          <TextField
            label="Reply"
            variant="outlined"
            fullWidth
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="reply-text-field"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleReply}
            className="reply-button"
          >
            Reply
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default ForumPost;
