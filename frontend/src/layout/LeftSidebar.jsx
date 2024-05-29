import React from 'react';
import { Box, Text, Button, Icon } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi'; 

const LeftSidebar = ({ onBackClick }) => {
    return (
        <Box
            width="300px"
            height="100vh"
            bg="gray.100"
            borderRight="1px solid"
            borderColor="gray.200"
            px={4}
            py={6}
        >
            
            <Button
                variant="ghost"
                color="gray.600"
                leftIcon={<Icon as={FiChevronLeft} />}
                onClick={onBackClick}
                mb={4}
            >
                Back
            </Button>

           
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Thread Information
            </Text>
            <Text fontSize="md" color="gray.600" mb={4}>
                This is a sample thread description. You can add more details here.
            </Text>

           
            <Button colorScheme="blue" size="sm" mb={2}>
                Reply
            </Button>
            <Button colorScheme="red" size="sm" mb={2}>
                Report
            </Button>
            
        </Box>
    );
};

export default LeftSidebar;
