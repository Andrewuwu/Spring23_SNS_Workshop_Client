import React from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { Divider } from '@chakra-ui/react'

// Following vs For You

// Create your own post area

// Posts List, Infinite scrolling?

function PostColumn(){
    return(
        <div>
            <PostForm></PostForm>
            <PostList></PostList>
        </div>
    );
}

export default PostColumn;