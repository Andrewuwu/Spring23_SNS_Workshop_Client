import React, { useState, useEffect } from "react";
import "./MainFeedContainer.css"
import PostList from "../posts/PostList";
import SuggestionsColumn from "../suggestions/SuggestionsColumn";

function MainFeedContainer() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:5050/posts");
            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }
            const data = await response.json();
            setPosts(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    return (
        <div className="contentContainer">
           <PostList></PostList>
           <SuggestionsColumn></SuggestionsColumn>
        </div>
    );
}

export default MainFeedContainer;
