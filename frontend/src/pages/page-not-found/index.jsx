import { Flex, Heading, Text } from '@chakra-ui/react';

const PageNotFound = () => {
    return (
        <Flex height="100vh" width="100%" justify="center" align="center" direction="column">
            <Heading as="h1" size="2xl" mb="4">
                Page Not Found
            </Heading>
            <Text fontSize="lg">The page you are looking for does not exist.</Text>
        </Flex>
    );
};

export default PageNotFound;
