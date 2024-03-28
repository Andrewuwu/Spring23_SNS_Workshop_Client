import React from "react";
import {useState} from "react";
import {FormControl, FormLabel, Input, FormHelperText, FormErrorMessage} from '@chakra-ui/react';
import "./login.css";


function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    
    const isError = email === '';

    return(
        <div className="center">
            <FormControl isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={email} onChange={handleEmailChange} />
                {!isError ? (
                <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
                ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
                <FormLabel>Password</FormLabel>
                <Input type='password' value={password} onChange={handlePasswordChange} />
                {!isError ? (
                <FormHelperText>
                    Enter Your Password
                </FormHelperText>
                ) : (
                <FormErrorMessage>Password is Required</FormErrorMessage>
                )}
            </FormControl>
        </div>
    );
}

export default Register;