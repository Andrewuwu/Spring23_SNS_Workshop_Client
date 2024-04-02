import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Image, Avatar, Heading } from "@chakra-ui/react";
import PostList from "../posts/PostList";

function ProfileCard({ user }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                if (user) { 
                    const response = await fetch(`http://localhost:5050/posts/byuser/${user._id}`);
                    const data = await response.json();
                    setPosts(data);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        console.log("My passed in User prop", user);
        fetchPosts();
    }, [user]); // Run effect only when user changes

    if (!user) {
        return null; // or render a loading indicator
    }

    return (
        <div className="contentContainer">
            <Card>
                <CardHeader>
                    <Avatar><Image src={user.profilePicture} /></Avatar>
                    <Heading>{user.username}</Heading>
                </CardHeader>
                <CardBody>
                    <PostList posts={posts} />
                </CardBody>
            </Card>
        </div>
    );
}

export default ProfileCard;
