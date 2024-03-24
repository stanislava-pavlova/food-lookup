import { AlertIcon, Alert as ChakraAlert } from '@chakra-ui/react';

const Alert = ({ status, message }) => {
    return (
        <ChakraAlert status={status} mt={4}>
            <AlertIcon />
            {message}
        </ChakraAlert>
    );
};

export default Alert;
