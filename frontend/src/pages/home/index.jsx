import axios from 'axios';
import {
	Box,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	Spinner,
	Th,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import FoodTable from '../../components/food-table';
import { useEffect, useState } from 'react';

const Homepage = () => {
	const [foods, setFoods] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetchFoods();
	}, []);

	const fetchFoods = async () => {
		setIsLoading(true);
		axios
			.get('http://localhost:5000/api/foods')
			.then(function (response) {
				setFoods(response.data);
			})
			.catch(function (error) {
				setError('Oops, something went wrong. Try again later');
				console.error(error);
			})
			.finally(function () {
				setIsLoading(false);
			});
	};

	const handleSearchInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredFoods = foods.filter((food) =>
		food.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

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

	if (error) {
		return <Text>{error}</Text>;
	}
	
	return (
		<>
			<Box>
				<FoodTable>
					<Th px="6">Selected Foods</Th>
				</FoodTable>
				<Box mt={10}>
					<FoodTable foods={filteredFoods}>
						<Th>
							<InputGroup>
								<Input
									isInvalid
									errorBorderColor="crimson"
									placeholder="Search foods..."
									value={searchTerm}
									onChange={handleSearchInputChange}
								/>
								<InputRightElement>
									<SearchIcon />
								</InputRightElement>
							</InputGroup>
						</Th>
					</FoodTable>
				</Box>
			</Box>
		</>
	);
};

export default Homepage;
