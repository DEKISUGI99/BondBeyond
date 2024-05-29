import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';
import { Flex, Box, Input, InputGroup, InputLeftElement, InputRightElement, Button, Checkbox, Link } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'; // Import eye icons
import authScreenAtom from '../atoms/authAtom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box>
        <form action=''>
          <h1>Login</h1>
          <InputGroup mb="4">
            <Input type='text' name='username' placeholder='Username' required />
            <InputLeftElement pointerEvents="none">
              <FaUser color="gray.300" />
            </InputLeftElement>
          </InputGroup>
          <InputGroup mb="4">
            <Input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              required
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <div className='remember-forgot'>
            <Checkbox>Remember me</Checkbox>
            <Link href='#'>Forgot password?</Link>
          </div>
          <Button type='submit' colorScheme="blue">Login</Button>
          <Box mt="4">
            <p>Don't have an account? <Link onClick={() => setAuthScreen("signup")}>Signup</Link></p>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginPage;
