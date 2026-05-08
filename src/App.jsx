// src/App.jsx
import { Flex, Box, useTheme } from '@chakra-ui/react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Nhớ import file Home vào nhé (Kiểm tra lại xem chữ Home viết hoa hay thường cho đúng thư mục của bạn)
import Home from './pages/Home'; 

function App() {
  const theme = useTheme();
  
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      
      {/* Box này BẮT BUỘC phải có flex="1" để giãn ra đẩy Footer xuống */}
      <Box flex="1" bg={theme.colors.bgLight}> 
         {/* Nhét toàn bộ nội dung của trang chủ vào đây */}
         <Home />
      </Box>

      <Footer />
    </Flex>
  );
}
export default App;