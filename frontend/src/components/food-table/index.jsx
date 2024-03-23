import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableContainer,
} from '@chakra-ui/react';

const FoodTable = ({ foods, children }) => {
	return (
		<TableContainer>
			<Table border="2px" borderColor="LightGrey">
				<Thead>
					<Tr>{children}</Tr>
					<Tr>
						<Th>Description</Th>
						<Th>Kcal</Th>
						<Th>Protein (g)</Th>
						<Th>Fat (g)</Th>
						<Th>Carbs (g)</Th>
					</Tr>
				</Thead>
				<Tbody>
					{foods?.map((food, index) => {
						return (
							<Tr key={index}>
								<Td>{food.description}</Td>
								<Td>{food.calories.toFixed(2)}</Td>
								<Td>{(food.protein || 0).toFixed(2)}</Td>
								<Td>{(food.fat || 0).toFixed(2)}</Td>
								<Td>{(food.carbs || 0).toFixed(2)}</Td>
							</Tr>
						);
					})}
				</Tbody>
				<Tfoot>
					<Tr>
						<Th>Total</Th>
						<Th>
							{foods
								?.reduce((total, food) => total + (food.calories || 0), 0)
								.toFixed(2)}
						</Th>
						<Th>
							{foods
								?.reduce((total, food) => total + (food.protein || 0), 0)
								.toFixed(2)}
						</Th>
						<Th>
							{foods
								?.reduce((total, food) => total + (food.fat || 0), 0)
								.toFixed(2)}
						</Th>
						<Th>
							{foods
								?.reduce((total, food) => total + (food.carbs || 0), 0)
								.toFixed(2)}
						</Th>
					</Tr>
				</Tfoot>
			</Table>
		</TableContainer>
	);
};

export default FoodTable;
