import React from 'react'
import classes from './Home.module.css'
import PostList from '../UserFeed/PostList';
import Navbar from '../Navbar';

const Home = () => {

  const posts = [
    {
      imageUrl: 'https://newuniversity.org/wp-content/uploads/2020/12/EomfNBYUYAACIk6.jpg',
    },
    {
      imageUrl: 'https://images.rooter.gg/rooter-broadcast-images/incoming/pubg-2.png',
    },
    // Add more posts as needed
  ];  


  return (
    < >
    <div style={styles.app}>
        <Navbar/> 
    <PostList posts={posts} />
  </div>
  </>
  )
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
  },
};

export default Home
