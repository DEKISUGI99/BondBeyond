import React from 'react';
import { Avatar, Box, Flex, Text, VStack, Link, MenuButton, Menu, Portal, MenuList, MenuItem, useToast,useColorMode } from '@chakra-ui/react';
import { BsInstagram } from 'react-icons/bs'; // Import BsInstagram icon
import { CgMoreO } from 'react-icons/cg';


const UserHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();

    const toast=useToast();
    const copyURL =()=>{
        const currentURL =window.location.href;
        console.log(window)
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
				title: "Success.",
				status: "success",
				description: "Profile link copied.",
				duration: 3000,
				isClosable: true,
			});
        });
    }
  return (
    <VStack gap={4} alignItems="start">
      <Flex justifyContent="space-between" w="full">
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Akshat singh
          </Text>
          <Flex gap={2} alignItems="center">
            <Text fontSize="sm">pussy destroyer</Text>
            <Text fontSize="10px" bg={colorMode === 'light' ? '#DBA979' : 'white'} color="gray.light" p={1} borderRadius="full">
              MEAGAPROJECT
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name="Akshat Singh"
            src="/ak.png"
            size={
              {
                base:"md",
                md:"lg",
              }
            }
          />
        </Box>
      </Flex>
      <Text>Founder of randi.com</Text>
      <Flex w="full" justifyContent="space-between" alignItems="center">
        <Flex gap={2} alignItems="center">
          <Text color="gray.light">55M followers</Text>
          <Box w="1" h="2" bg="gray.light" borderRadius="full"></Box>
          <Link color="gray.light" href="https://www.instagram.com">
            Instagram.com
          </Link>
        </Flex>
        <Flex>
          <Box className='icon-container'>
            <BsInstagram size={24} cursor="pointer" />
          </Box>
          <Box className='icon-container'>
            <Menu>
                <MenuButton>
                    <CgMoreO size={24} cursor="pointer" />
                </MenuButton>
                <Portal>
                    <MenuList bg={"gray.dark"}>
                        <MenuItem bg={"gray.dark"} onClick={copyURL}>copy link</MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
            
          </Box>
        </Flex>
      </Flex>
      <Flex w={"full"}>
      <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pd="3" cursor={"pointer"}>
        <Text fontWeight={"bold"}>THREADS</Text>
      </Flex>
      <Flex flex={1} borderBottom={"1 px solid gray"} justifyContent={"center"} color={"grsy.light"} pd="3" cursor={"pointer"}>
        <Text fontWeight={"bold"}>REPLIES</Text>
      </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
