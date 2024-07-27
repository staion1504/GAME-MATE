// src/components/ChatWindow.js
import React from 'react';
import styles from './ChatWindow.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';


import AgoraRTC from "agora-rtc-sdk-ng";

let rtc = {
  localAudioTrack: null,
  client: null
};

let options = {
  // Pass your app ID here.
  appId: "bc82c4b61fc64d8987727a0ae2590557"  ,
  // Set the channel name.
  channel: "Session",
  // Use a temp token
  token: null,
  // Set the user ID.
  uid: Math.floor(Math.random() * 2032),
};


async function startBasicCall() {
    // Create an AgoraRTCClient object.
    rtc.client = AgoraRTC.createClient({mode: "rtc", codec: "vp8"});

    // Listen for the "user-published" event, from which you can get an AgoraRTCRemoteUser object.
    rtc.client.on("user-published", async (user, mediaType) => {
        // Subscribe to the remote user when the SDK triggers the "user-published" event
        await rtc.client.subscribe(user, mediaType);
        console.log("subscribe success");

        // If the remote user publishes an audio track.
        if (mediaType === "audio") {
            // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
            const remoteAudioTrack = user.audioTrack;
            // Play the remote audio track.
            remoteAudioTrack.play();
        }
        });
        // Listen for the "user-unpublished" event
        // rtc.client.on("user-unpublished", async (user) => {
        //     // Unsubscribe from the tracks of the remote user.
        //     await rtc.client.unsubscribe(user);
        // });


    

        
            // Join an RTC channel.
            await rtc.client.join(options.appId, options.channel, options.token, options.uid);
            // Create a local audio track from the audio sampled by a microphone.
            rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
            // Publish the local audio tracks to the RTC channel.
            await rtc.client.publish([rtc.localAudioTrack]);

            console.log("publish success!");
        

        // document.getElementById("leave").onclick = async function () {
        //     // Destroy the local audio track.
        //     rtc.localAudioTrack.close();

        //     // Leave the channel.
        //     await rtc.client.leave();
        // }
    
}





const ChatWindow = ({ chat, sessionName }) => {
  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <h2 className={styles.chatTitle}>{sessionName.toUpperCase()}</h2>
        <div className={styles.chatActions}>
          <FontAwesomeIcon  icon={faHeadset} style={{ color: 'green', marginRight: '10px' }} />
          <button style={{ borderRadius: '10px' }} onClick={startBasicCall}>Join voice</button>
        </div>
      </div>
      <div className={styles.chatMessages}>
        {chat.messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${message.sender === 'me' ? styles.myMessage : ''}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.chatInput}>
        <input type="text" placeholder="Type your message..." />
        <button >Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
