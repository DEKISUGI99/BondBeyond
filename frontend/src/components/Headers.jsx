import React from 'react'; 
import { Flex, Button, useColorMode, Link } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import userAtom from '../atoms/userAtom';
import useLogout from '../hooks/useLogout';
import { BsFillChatQuoteFill } from 'react-icons/bs';
const Headers = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  return (
    <Flex justifyContent="space-between" mt={6} mb={12} >
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24}/>
        </Link>
      )}

      <Button cursor="pointer" onClick={toggleColorMode} fontWeight={400} bg={'#5BBCFF'}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>

      {user && (
        <Flex alignItems={"center"} gap={4}>

        <Link as={RouterLink} to={`/${user.username}`}>
          <RxAvatar size={24}/>
        </Link>

        <Link as={RouterLink} to={`/chat`}>
          <BsFillChatQuoteFill size={20}/>
        </Link>

        <Button  size={"xs"}  onClick={logout}>
			    <FiLogOut size={20} />
		    </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Headers;
