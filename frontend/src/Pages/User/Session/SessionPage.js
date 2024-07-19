// src/components/SessionPage.js
import React, { useState, useEffect } from 'react';
import styles from './SessionPage.module.css';
import Navbar from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  const [sessionName, setSessionName] = useState('');

  const handleNext = () => {
    props.onHide();
    props.onCreateSession(sessionName);
  };

  return (
    <Modal
      {...props}
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: 'rgba(39,42,55,255)', color: 'white' }}>
        <Modal.Title id="contained-modal-title-vcenter">
          Session Name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'rgba(39,42,55,255)', color: 'white' }}>
        <input
          type='text'
          placeholder='Minecraft, PUBG ...'
          style={{ marginLeft: '5px', borderRadius: '7px' }}
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: 'rgba(39,42,55,255)', color: 'white' }}>
        <Button onClick={handleNext}>Next</Button>
      </Modal.Footer>
    </Modal>
  );
}

const SessionPage = () => {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    // Clear the session flag on component mount (for safety)
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('sessionOpen');
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.removeItem('sessionOpen');
      });
    };
  }, []);

  const handleCreateSession = (sessionName) => {
    if (localStorage.getItem('sessionOpen')) {
      alert('You already have an open session. Please close it before creating a new one.');
      return;
    }

    // Set the session flag
    localStorage.setItem('sessionOpen', 'true');

    // Open the session in a new tab
    const newTab = window.open(`/session/${sessionName}`, '_blank');
    newTab.onbeforeunload = () => {
      localStorage.removeItem('sessionOpen');
    };
    newTab.focus();
  };

  return (
    <>
      <Navbar />
      <div className={styles.container2}></div>
      <div className={styles.container}>
        <div className={styles.options}>
          <button className={styles.optionButton} onClick={() => setModalShow(true)}>Create Session</button>
          <button className={styles.optionButton}>Join Session</button>
        </div>
        <div className={styles.rules}>
          <h2>Rules for Joining or Creating a Session</h2>
          <ul>
            <li>Rule 1: Follow the community guidelines.</li>
            <li>Rule 2: Respect all participants.</li>
            <li>Rule 3: Ensure your internet connection is stable.</li>
            <li>Rule 4: Use appropriate language and behavior.</li>
            <li>Rule 5: Have fun and enjoy the session!</li>
          </ul>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onCreateSession={handleCreateSession}
      />
    </>
  );
};

export default SessionPage;
