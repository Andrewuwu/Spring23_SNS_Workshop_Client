import React, { useState, useEffect } from "react";
import { VStack, Box, StackDivider, Text, Heading, Flex, Spacer, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SuggestionsList() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        const fetchSuggestedUsers = async (user) => {
            const requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( { user : user })
            }

            const res = await fetch("http://localhost:5050/users/suggestions", requestOptions);
            const users = await res.json()
            setSuggestedUsers(users);
        }
        const user = JSON.parse(localStorage.getItem("user"));
        fetchSuggestedUsers(user)
    }, [])


    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
        >
        {suggestedUsers.map((user) => (
            <Flex key={user._id} minWidth='max-content' alignItems='center' gap='2'>
                <Box p="2">
                    <Link to={`/profile/${user._id}`}>{user.username}</Link>
                </Box>
                <Spacer/>
                <Button colorScheme='black'>Follow</Button>
            </Flex>
        ))}
        </VStack>
    );
}

export default SuggestionsList