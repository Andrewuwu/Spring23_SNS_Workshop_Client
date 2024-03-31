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
  AlertDialogFooter,
  Heading
} from '@chakra-ui/react';

function PostForm() {
  const [caption, setcaption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleCaptionChange = (e) => {
    setcaption(e.target.value);
  };

  const handleSubmit = () => {
    if (caption.trim().length === 0) {
      setIsOpen(true);
      return;
    }
    console.log('Posting:', caption);
    const user = localStorage.getItem("user");
    
    setcaption('');
  };

  return (
    <>
      <FormControl isInvalid={isOpen}>
        <FormLabel><Heading>Post caption</Heading></FormLabel>
        <Textarea
          value={caption}
          onChange={handleCaptionChange}
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
