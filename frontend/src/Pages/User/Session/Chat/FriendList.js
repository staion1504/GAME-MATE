// src/components/FriendList.js
import React from 'react';
import styles from './FriendList.module.css';
import { FaUserPlus, FaUserMinus } from 'react-icons/fa';

const FriendList = ({ friends, onDeleteSession, onRemoveFriend, onSelectFriend }) => {
  return (
    <div className={styles.friendList}>
      <h2 className={styles.title}>Friends</h2>
      <input type="text" placeholder="Search friends..." className={styles.searchInput} />
      <div className={styles.friendListContainer}>
        {friends.map(friend => (
          <div
            key={friend.id}
            className={styles.friendItem}
            onClick={() => onSelectFriend(friend.id)}
          >
            <img src={friend.avatar} alt={friend.name} className={styles.avatar} />
            <div className={styles.friendInfo}>
              <h3 className={styles.friendName}>{friend.name}</h3>
              <FaUserPlus size={20} onClick={(e) => { e.stopPropagation(); onRemoveFriend(friend.id); }} />
            </div>
          </div>
        ))}
      </div>
      <button className={styles.addFriendButton} onClick={onDeleteSession}>
        Delete session
      </button>
    </div>
  );
};

export default FriendList;
