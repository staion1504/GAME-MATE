// src/components/Post.js
import React, { useState } from 'react';

import classes from "./Post.module.css"

const Post = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div className={classes.div123} style={styles.post}>
      <img src={post.imageUrl} alt="Post" style={styles.image} />
      <div style={styles.postActions}>
        <button onClick={handleLike} style={styles.button}>Like</button>
        <span>{likes} Likes</span>
      </div>
      <div style={styles.comments}>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
      <form onSubmit={handleComment} style={styles.commentForm}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment"
          style={styles.commentInput}
        />
        <button type="submit" style={styles.button}>Comment</button>
      </form>
    </div>
  );
};

const styles = {
  post: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '1rem 0',
    padding: '1rem',
    backgroundColor: 'white',
    maxWidth: '600px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    maxHeight: '400px',
    objectFit: 'cover',
  },
  postActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.5rem',
  },
  comments: {
    marginTop: '1rem',
  },
  commentForm: {
    display: 'flex',
    marginTop: '0.5rem',
  },
  commentInput: {
    flex: 1,
    marginRight: '0.5rem',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#0073b1',
    color: 'white',
    cursor: 'pointer',
  },
};

export default Post;
