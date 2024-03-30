import React from "react";
import "./MainFeedContainer.css"
import PostColumn from "../posts/PostsColumn";
import SuggestionsColumn from "../suggestions/SuggestionsColumn";
import NavColumn from "./NavColumn";
import {Grid, GridItem} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainFeedContainer() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("user")){
            navigate("/register");
        }
    },[]);
  

    return (
        <div className="contentContainer">
            <Grid templateColumns='repeat(10, 1fr)' gap={5}>
                <GridItem colStart={2} colEnd={4}>
                    <NavColumn></NavColumn>
                </GridItem>
                <GridItem colStart={4} colEnd={8}>
                    <PostColumn></PostColumn>
                </GridItem>
                <GridItem colStart={8} colEnd={11}>
                    <SuggestionsColumn></SuggestionsColumn>
                </GridItem>
            </Grid>
        </div>
    );
    
}

export default MainFeedContainer;
