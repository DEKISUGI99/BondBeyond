import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { Avatar, Flex, Text, Divider } from '@chakra-ui/react';
import Action from './Action';

const Comment = ({ userAvatar, createdAt, comment, username, likes }) => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex gap={4} py={2} my={2} w="full">
        <Avatar src={userAvatar} size="sm" />
        <Flex gap={2} w="full" flexDirection="column">
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Text fontSize="sm" fontWeight="bold">
              {username}
            </Text>
            <Flex gap={2} alignItems="center">
              <Text fontSize="sm" color="gray">
                {createdAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{comment}</Text>
          <Action liked={liked} setLiked={setLiked} />
          <Text fontSize="sm" color="gray">
            {liked ? 1 : 0} {likes}
          </Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Comment;
