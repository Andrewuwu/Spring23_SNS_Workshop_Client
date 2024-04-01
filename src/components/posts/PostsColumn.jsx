import React from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { Divider } from '@chakra-ui/react'
import { useState } from "react";

// Following vs For You

// Create your own post area

// Posts List, Infinite scrolling?

function PostColumn(){
    const [postsUpdate, setPostsUpdate] = useState(false);

    const handlePostCreated = () => {
        setPostsUpdate(!postsUpdate);
    }

    return(
        <div>
            <PostForm onPostCreated={handlePostCreated}></PostForm>
            <PostList key={postsUpdate ? 'updated' : 'initial'}></PostList>
        </div>
    );
}

export default PostColumn;