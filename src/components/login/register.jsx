import React from "react";
import {useState,  useEffect } from "react";
import {Card, CardHeader, Heading,CardBody, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Button} from '@chakra-ui/react';
import "./login.css";
import { Form, Route, useNavigate} from "react-router-dom";

function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user")){
            navigate("/");
        }
    }, [])
    
    
    const isError = username === '';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password, profilePicture: "abc.com", followers: [], following: [] })
        };
        const res = await fetch("http://localhost:5050/users/", requestOptions);
        const user = await res.json();
        console.log("New User", user);
        localStorage.setItem("user", JSON.stringify(user));

        setUsername("");
        setPassword("");
        navigate("/")
    }

    return(
        <div className="center">
            <Card>
                <CardHeader>
                    <Heading>
                        Register As A New User
                    </Heading>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <FormControl isInvalid={isError}>
                            <FormLabel>Username</FormLabel>
                            <Input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                            {!isError ? (
                            <FormHelperText>
                                Enter your username
                            </FormHelperText>
                            ) : (
                            <FormErrorMessage>Username is Required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            {!isError ? (
                            <FormHelperText>
                                Enter Your Password
                            </FormHelperText>
                            ) : (
                            <FormErrorMessage>Password is Required</FormErrorMessage>
                            )}
                        </FormControl>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            type='submit'
                        >
                            Register
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}

export default Register;