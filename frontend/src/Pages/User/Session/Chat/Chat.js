
import React,{useEffect} from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import styles from './Chat.module.css';

const Chat = () => {
  const { sessionName } = useParams();
  const navigate = useNavigate();

useEffect(() => {
    // Remove the session flag on component unmount
    return () => {
      localStorage.removeItem('sessionOpen');
    };
  }, []);

  const handleDeleteSession = () => {
    // Add logic to delete the session
    // For now, just navigate back to the main page
    navigate('/');
    localStorage.removeItem('sessionOpen');
  };

  const handleCloseTab = () => {
    localStorage.removeItem('sessionOpen');
    window.close();
  };

  return (
    <div className={styles.container}>
    <h1>{sessionName}</h1>
    <div className={styles.chatContainer}>
      <h2>Chat</h2>
      {/* Add chat implementation here */}
    </div>
    <div className={styles.voiceChatContainer}>
      <h2>Voice Chat</h2>
      {/* Add voice chat implementation here */}
    </div>
    <button className={styles.deleteButton} onClick={handleDeleteSession}>
      Delete Session
    </button>
    <button className={styles.closeButton} onClick={handleCloseTab}>
      Close Tab
    </button>
  </div>
  );
};

export default Chat;
