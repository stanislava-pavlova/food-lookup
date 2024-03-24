import { Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <Flex
            as="header"
            justify="center"
            align="center"
            gap="4"
            p="4"
            borderBottom="1px solid"
            borderColor="gray.200"
        >
            <Link
                as={RouterLink}
                to="/"
                fontWeight={location.pathname === '/' ? 'bold' : 'normal'}
                fontSize="lg"
                color="teal.500"
                _hover={{ textDecor: 'none' }}
            >
                Home
            </Link>
            <Link
                as={RouterLink}
                to="/add-food"
                fontWeight={location.pathname === '/add-food' ? 'bold' : 'normal'}
                fontSize="lg"
                color="teal.500"
                _hover={{ textDecor: 'none' }}
            >
                Add Food
            </Link>
        </Flex>
    );
};

export default Header;
