import React from 'react';
import { Flex, Image,Button, useColorMode } from '@chakra-ui/react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = () => {
    console.log('Toggling color mode...');
    toggleColorMode();
  };

  console.log('Color Mode:', colorMode);

  return (
    
    <Flex justifyContent="center" mt={6} mb={12} >
        <Button cursor="pointer" onClick={handleClick} fontWeight={400} bg={'#5BBCFF'} position={'relative'} >
           {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
    </Flex>
  );
};

export default Header;
