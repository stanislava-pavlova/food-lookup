import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Tooltip } from '@chakra-ui/react';

const FoodTable = ({ foods, onFoodClick, tooltipLabel, children }) => {
    const calculateTotal = (prop) => {
        return foods?.reduce((total, food) => total + (food[prop] || 0), 0).toFixed(2);
    };

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
                    {foods?.map((food, index) => (
                        <Tooltip
                            key={index}
                            hasArrow
                            label={tooltipLabel}
                            bg="teal"
                            placement="top-start"
                        >
                            <Tr onClick={() => onFoodClick(food, index)} cursor="pointer">
                                <Td>{food.description}</Td>
                                <Td>{food.calories.toFixed(2)}</Td>
                                <Td>{(food.protein || 0).toFixed(2)}</Td>
                                <Td>{(food.fat || 0).toFixed(2)}</Td>
                                <Td>{(food.carbs || 0).toFixed(2)}</Td>
                            </Tr>
                        </Tooltip>
                    ))}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Total</Th>
                        <Th>{calculateTotal('calories')}</Th>
                        <Th>{calculateTotal('protein')}</Th>
                        <Th>{calculateTotal('fat')}</Th>
                        <Th>{calculateTotal('carbs')}</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
};

export default FoodTable;
