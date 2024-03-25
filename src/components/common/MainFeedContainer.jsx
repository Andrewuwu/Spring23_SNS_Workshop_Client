import React, { useState, useEffect } from "react";
import "./MainFeedContainer.css"
import PostColumn from "../posts/PostsColumn";
import SuggestionsColumn from "../suggestions/SuggestionsColumn";
import {Grid, GridItem} from "@chakra-ui/react";

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
            <Grid templateColumns='repeat(10, 1fr)' gap={5}>
                <GridItem colStart={1} colEnd={7}>
                    <PostColumn></PostColumn>
                </GridItem>
                <GridItem colStart={7} colEnd={11}>
                    <SuggestionsColumn></SuggestionsColumn>
                </GridItem>
            </Grid>
        </div>
    );
    
}

export default MainFeedContainer;
