import React from "react";
import {useState} from "react";
import {FormControl, FormLabel, Input, FormHelperText, FormErrorMessage} from '@chakra-ui/react';
import "./login.css";


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isError = email === '';

    return(
        <div className="center">
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
        </div>
    );
}

export default Login;