import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';

const AddFood = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <Box width="50%">
            <Heading textAlign="center">Add Food Item</Heading>
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
                    <Button type="submit" colorScheme="teal">
                        Add
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default AddFood;
