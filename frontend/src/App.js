import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/home';
import AddFood from './pages/add-food';
import PageNotFound from './pages/page-not-found';
import Header from './components/header';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="/add-food" element={<AddFood />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
