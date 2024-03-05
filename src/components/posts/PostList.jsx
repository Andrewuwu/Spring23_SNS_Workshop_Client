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
      <>
        <div>
          <h2>Posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post._id}>{post.content}</li>
            ))}
          </ul>
        </div>
      </>
    );
}

export default PostList;