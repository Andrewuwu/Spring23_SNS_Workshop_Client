import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Image, Avatar, Heading, Flex, Box, Button, Spacer} from "@chakra-ui/react";
import PostList from "../posts/PostList";

function ProfileCard({ user, currUser }) {
    const [posts, setPosts] = useState([]);
    const [isCurrentUser, setIsCurrentUser] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    const checkRelationship = () => {
        if (currUser && user) {
            setIsCurrentUser(currUser._id === user._id);
            setIsFollowing(currUser.following.includes(user._id));
        }
    };

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
        checkRelationship();
        fetchPosts();
        
    }, [user, currUser]);

    const handleFollow = async () => {
        try {
            const response = await fetch("http://localhost:5050/users/follow", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    follower_id: currUser._id,
                    following_id: user._id
                })
            });
            if (response.ok) {
                setIsFollowing(true);
            }
        } catch (error) {
            console.error("Error following user:", error);
        }
    };

    const handleUnfollow = async () => {
        try {
            const response = await fetch("http://localhost:5050/users/unfollow", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    unfollower_id: currUser._id,
                    unfollowing_id: user._id
                })
            });
            if (response.ok) {
                setIsFollowing(false);
            }
        } catch (error) {
            console.error("Error unfollowing user:", error);
        }
    };

    if (!user) {
        return null;
    }

    return (
        <div className="profile-content">
            <Card>
                <CardHeader>
                    <Avatar><Image src={user.profilePicture} /></Avatar>
                    <Heading>{user.username}</Heading>
                </CardHeader>
                <CardBody>
                    <Flex minWidth='max-content' alignItems='center' gap='2'>
                        <Box p='2'>
                            <Heading size="md">Followers: {user.followers.length}</Heading>
                        </Box>
                        <Box p='2'>
                            <Heading size="md">Following: {user.following.length}</Heading>
                        </Box>
                        <Spacer/>
                        {!isCurrentUser && (
                            <>
                                {isFollowing ? (
                                    <Button colorScheme='red' onClick={handleUnfollow}>Unfollow</Button>
                                ) : (
                                    <Button colorScheme='blue' onClick={handleFollow}>Follow</Button>
                                )}
                            </>
                        )}
                    </Flex>
                </CardBody>
            </Card>
            <div className="scrollable-column">
                <PostList posts={posts}></PostList>
            </div>
        </div>
    );
}

export default ProfileCard;
