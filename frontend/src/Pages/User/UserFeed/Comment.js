// src/components/Comment.js
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div style={styles.comment}>
      <p>{comment}</p>
    </div>
  );
};

const styles = {
  comment: {
    borderTop: '1px solid #eee',
    padding: '0.5rem 0',
  },
};

export default Comment;
