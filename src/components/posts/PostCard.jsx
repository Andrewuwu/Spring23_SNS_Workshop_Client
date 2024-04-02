import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter, Flex, Box, Heading, Text, IconButton, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react"; // Importing Avatar component

function timeSince(timestamp) {
  const postDate = new Date(timestamp);
  const currentDate = new Date();
  const seconds = Math.floor((currentDate - postDate) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years ago`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} months ago`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} days ago`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hours ago`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes ago`;
  }
  return "Just Now";
}

function PostCard({ post }) {
  return (
    <Card>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar src={post.image} />
            <Box>
              <Heading size="md"><Link to={`/profile/${post.author.id}`}>{post.author.username}</Link></Heading>
              <Text>{timeSince(post.timestamp)}</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          --- {post.caption} ---
        </Text>
      </CardBody>
      <Image
        objectFit="cover"
        src={post.image}
        alt="Chakra UI"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost">
          Like
        </Button>
        <Button flex="1" variant="ghost">
          Comment
        </Button>
        <Button flex="1" variant="ghost">
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PostCard;
