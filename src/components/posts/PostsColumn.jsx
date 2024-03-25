import React from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

// Following vs For You

// Create your own post area

// Posts List, Infinite scrolling?

function PostColumn(){
    return(
        <>
            <PostForm></PostForm>
            <PostList></PostList>
        </>
        
        
    );
}

export default PostColumn;