import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import "./PostsColumn.css";
import { Heading, Divider} from "@chakra-ui/react";

function PostColumn(){
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
          const response = await fetch('http://localhost:5050/posts');
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [])

    const addPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return(
        <div>
            <PostForm addPost={addPost}></PostForm>
            <div className="scrollable-column">
                <PostList posts={posts}></PostList>
            </div>
        </div>
    );
}

export default PostColumn;
