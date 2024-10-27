import { ChakraProvider } from "@chakra-ui/react";
import { VStack } from '@chakra-ui/react'
import Projects from './components/ProjectCard';
import Experience from './components/Experience';
import About from './components/About';
import MobileMenu from './components/MobileMenu';
import {Card, Button, Avatar} from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      <VStack>
            <Projects />
        </VStack>
    </ChakraProvider>
  );
}

export default App;