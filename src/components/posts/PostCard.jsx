import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter, Flex, Box, Heading, Text, IconButton, Button} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react"; // Importing Avatar component



function PostCard({ post }) {
  return (
    <Card>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar src={post.image} />

            <Box>
              <Heading size="sm">{post.author.username}</Heading>
              <Text>Creator, Chakra UI</Text>
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
