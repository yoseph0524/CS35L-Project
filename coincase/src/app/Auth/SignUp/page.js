"use client";

import { React, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Container,
  Collapse,
  Box,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";

import {InfoOutlineIcon} from "@chakra-ui/icons"

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const handleFocus = () => {
    if (!focusPassword) {
      setFocusPassword(true);
    }
  };
  const handleClick = () => setShowPassword(!showPassword);
  return (
    <div>
      <Container w="500px" centerContent>
        <h1>Create An Account!</h1>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input variant="flushed" placeholder="First Name" />
          <FormLabel>Last Name</FormLabel>
          <Input variant="flushed" placeholder="Last Name" />
          <FormLabel>Email</FormLabel>
          <Input variant="flushed" placeholder="Email" />
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              variant="flushed"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onFocus={handleFocus}
            />
            <InputRightElement>
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Collapse in={focusPassword} animateOpacity>
            <Box>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={InfoOutlineIcon} color="gray.500" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                </List>
            </Box>
          </Collapse>
        </FormControl>
      </Container>
    </div>
  );
}

export default SignUp;
