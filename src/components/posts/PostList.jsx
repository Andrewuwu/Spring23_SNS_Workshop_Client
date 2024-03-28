import { useState, useEffect } from 'react';
import PostCard from './PostCard';

function PostList(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetchPosts();
    }, []);
  
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5050/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    return (
      <div style={{marginTop: "2rem"}}>
        {posts.map((post, index) => (
          <PostCard key={index} post={post}></PostCard>
        ))}
      </div>
    );
}

export default PostList;