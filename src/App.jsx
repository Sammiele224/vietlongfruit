// src/App.jsx
import { Flex, Box } from '@chakra-ui/react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      
      {/* Box này BẮT BUỘC phải có flex="1" để giãn ra đẩy Footer xuống */}
      <Box flex="1" bg="gray.100"> 
         {/* Nội dung trang web sẽ nằm đây */}
      </Box>

      <Footer />
    </Flex>
  );
}
export default App;