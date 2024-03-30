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

    localStorage.setItem("user", JSON.stringify({username: "bob", password: "password"}));
    const user = JSON.parse(localStorage.getItem("user"));

  
    return (
      <div style={{marginTop: "2rem"}}>
        <h1>Welcome {user.username}!</h1>
        {posts.map((post, index) => (
          <div key={index}>
            <PostCard post={post}></PostCard>
          </div>
        ))}
      </div>
    );
}

export default PostList;