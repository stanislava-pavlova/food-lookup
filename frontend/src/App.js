import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/home';
import AddFood from './pages/add-food';
import PageNotFound from './pages/page-not-found';

function App() {
    return (
        <ChakraProvider>
            <Container maxW="1200px" py="10" centerContent>
                <Router>
                    <Routes>
                        <Route index element={<Homepage />} />
                        <Route path="/add-food" element={<AddFood />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Router>
            </Container>
        </ChakraProvider>
    );
}

export default App;
