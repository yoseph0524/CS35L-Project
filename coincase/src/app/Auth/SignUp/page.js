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
  HStack,
  VStack,
  Divider,
  Center,
  StackDivider,

} from "@chakra-ui/react";

import { InfoOutlineIcon, CheckIcon, NotAllowedIcon,ViewIcon,ViewOffIcon } from "@chakra-ui/icons";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleFocus = () => {
    if (!focusPassword) {
      setFocusPassword(true);
    }
  };
  const handleShow = () => setShowPassword(!showPassword);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name == 'password' && e.target.value !== "") {
      setFocusPassword(true);
    } else if (e.target.name == "password" && e.target.value === "") {
      setFocusPassword(false);
    }
    console.log(formData.password);
  };

  const checkPasswordRequirements = (password) => {
    const requirements = [
      /.{8,}/, // Minimum length of 8 characters
      /[A-Z]/, // Contains an uppercase letter
      /[a-z]/, // Contains a lowercase letter
      /[0-9]/, // Contains a number
      /[!@#\$%\^\&*\)\(+=._-]/, // Contains a special character
    ];

    return requirements.map((regex) => regex.test(password));
  };

  const isValidPassword = (password) => {
    const metRequirements = checkPasswordRequirements(password);
    return metRequirements.every((req) => req);
  };

  return (
    <div>
      <Container w="750px" centerContent>
        <h1>Create An Account!</h1>
        <FormControl>
          <VStack spacing={5}>
            <HStack spacing={2} divider={<StackDivider />}>
              <Input
                variant="flushed"
                placeholder="First Name"
                name="firstName"
                _placeholder={{ opacity: 0.8, color: "gray.500" }}
                focusBorderColor="pink.400"
              />
              <Input
                variant="flushed"
                placeholder="Last Name"
                name="lastName"
                _placeholder={{ opacity: 0.8, color: "gray.500" }}
                focusBorderColor="pink.400"
              />
            </HStack>
            <Input
              variant="flushed"
              placeholder="Email"
              name="email"
              _placeholder={{ opacity: 0.8, color: "gray.500" }}
              focusBorderColor="pink.400"
            />
            <InputGroup>
              <Input
                variant="flushed"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={handleInput}
                _placeholder={{ opacity: 0.8, color: "gray.500" }}
                focusBorderColor="pink.400"
              />
              <InputRightElement>
                <Button h="1.75rem" size="sm" onClick={handleShow}>
                  {showPassword ?  <ViewOffIcon/> : <ViewIcon/>}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Collapse in={focusPassword} animateOpacity>
              <Box>
                <List spacing={1}>
                  <ListItem>
                    <ListIcon
                      as={
                        checkPasswordRequirements(formData.password)[0]
                          ? CheckIcon
                          : NotAllowedIcon
                      }
                      color={
                        checkPasswordRequirements(formData.password)[0]
                          ? "green.500"
                          : "red.500"
                      }
                    />
                    At least 8 characters
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={
                        checkPasswordRequirements(formData.password)[1]
                          ? CheckIcon
                          : NotAllowedIcon
                      }
                      color={
                        checkPasswordRequirements(formData.password)[1]
                          ? "green.500"
                          : "red.500"
                      }
                    />
                    At least 1 uppercase letter
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={
                        checkPasswordRequirements(formData.password)[2]
                          ? CheckIcon
                          : NotAllowedIcon
                      }
                      color={
                        checkPasswordRequirements(formData.password)[2]
                          ? "green.500"
                          : "red.500"
                      }
                    />
                    At least 1 lowercase character
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={
                        checkPasswordRequirements(formData.password)[3]
                          ? CheckIcon
                          : NotAllowedIcon
                      }
                      color={
                        checkPasswordRequirements(formData.password)[3]
                          ? "green.500"
                          : "red.500"
                      }
                    />
                    At least 1 number
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={
                        checkPasswordRequirements(formData.password)[4]
                          ? CheckIcon
                          : NotAllowedIcon
                      }
                      color={
                        checkPasswordRequirements(formData.password)[4]
                          ? "green.500"
                          : "red.500"
                      }
                    />
                    At least 1 special character
                  </ListItem>
                </List>
              </Box>
            </Collapse>
            <Center>
              <Button>Submit</Button>
            </Center>
          </VStack>
        </FormControl>
      </Container>
    </div>
  );
}

export default SignUp;
