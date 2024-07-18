// src/components/PostList.js
import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div style={styles.postList}>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

const styles = {
  postList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
  },
};

export default PostList;
