import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter
} from '@chakra-ui/react';

function PostForm() {
  const [content, setContent] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    if (content.trim().length === 0) {
      setIsOpen(true);
      return;
    }
    console.log('Posting:', content);
    setContent('');
  };

  return (
    <>
      <FormControl isRequired isInvalid={isOpen}>
        <FormLabel>Post Content</FormLabel>
        <Textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Write your post here..."
          size="lg"
        />
        <FormErrorMessage>Please enter some text before posting.</FormErrorMessage>
      </FormControl>
      <Button mt="4" colorScheme="blue" onClick={handleSubmit}>
        POST
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Empty Post
          </AlertDialogHeader>
          <AlertDialogBody>
            Please enter some text before posting.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default PostForm;
