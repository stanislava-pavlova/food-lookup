import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Heading, Input, Spinner } from '@chakra-ui/react';
import Alert from '../../components/alert';

const AddFood = () => {
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const showAlert = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setTimeout(() => {
            setAlertMessage('');
        }, 3000);
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        axios
            .post('http://localhost:5000/api/foods', data)
            .then(function (response) {
                showAlert('success', 'Food added successfully');
                reset();
            })
            .catch(function (error) {
                showAlert('error', 'Oops, something went wrong.');
                console.error(error);
            })
            .finally(setIsLoading(false));
    };

    if (isLoading) {
        return (
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        );
    }

    return (
        <Box width="50%">
            <Heading textAlign="center">Add Food Item</Heading>
            {alertMessage && <Alert status={alertType} message={alertMessage} />}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Input {...register('description', { required: true })} />
                </FormControl>
                <FormControl isRequired mt={4}>
                    <FormLabel>Calories</FormLabel>
                    <Input
                        type="number"
                        step="any"
                        min={0}
                        {...register('calories', { required: true })}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Protein</FormLabel>
                    <Input type="number" step="any" min={0} {...register('protein')} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Fat</FormLabel>
                    <Input type="number" step="any" min={0} {...register('fat')} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Carbs</FormLabel>
                    <Input type="number" step="any" min={0} {...register('carbs')} />
                </FormControl>
                <Box display="flex" justifyContent="center" mt={4}>
                    <Button type="submit" colorScheme="teal" disabled={isLoading}>
                        Add
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default AddFood;
