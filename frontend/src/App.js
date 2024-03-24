import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/home';
import AddFood from './pages/add-food';

function App() {
    return (
        <ChakraProvider>
            <Container maxW="1200px" py="10" centerContent>
                <Router>
                    <Routes>
                        <Route index element={<Homepage />} />
                        <Route path="/add-food" element={<AddFood />} />
                    </Routes>
                </Router>
            </Container>
        </ChakraProvider>
    );
}

export default App;
