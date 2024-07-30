import React, { useContext } from 'react';
import { ForumContext } from './ForumContext';
import ForumPost from './ForumPost';

const ForumList = () => {
  const { posts } = useContext(ForumContext);

  return (
    <div className="forum-list">
      {posts.map((post) => (
        <ForumPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ForumList;