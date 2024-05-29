import React, { useState } from 'react';
import { Avatar, Flex, Text, Image, Box, Divider,Button } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import Action from '../componenets/Action';

const PostPage = () => {
  const [liked, setLiked] = useState(false); // useState inside the component

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" my={4}>
        <Flex alignItems="center" gap={2}>
          <Avatar src="/ak.png" size="md" name="Akshat" />
          <Flex alignItems="center">
            <Text fontSize="sm" fontWeight="bold" mr={1}>
              Akshatsingh
            </Text>
            <Image src="/verified.png" w={4} h={4} />
          </Flex>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Text fontSize="sm" color="gray.light">
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Let's talk about sax sux</Text>

      <Box borderRadius={6} overflow="hidden" border="1px solid" borderColor="gray.light" my={3}>
        <Image src={'/ak.png'} w="full" />
      </Box>

      <Flex gap={3} my={3}>
        <Action liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems="center">
        <Text color="gray.light" fontSize="sm">
          5367 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius="full" bg="gray.light" />
        <Text color="gray.light" fontSize="sm">
          {liked ? 1 : 0} likes
        </Text>
      </Flex>
      <Divider my={4}></Divider>
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2x1"}></Text>
          <Text color={"gray.light"}> get replies and comments</Text>
        </Flex>
        <Button>
          Get
        </Button>

        
      </Flex>
      <Divider my={4}></Divider>
    </>
  );
};

export default PostPage;
