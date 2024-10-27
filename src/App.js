import { ChakraProvider } from "@chakra-ui/react";
import {VStack } from "@chakra-ui/react";
import  Header from "./components/Header";
import About from "./components/About";
import Projects from './components/Projects';

function App() {
  return (
    <ChakraProvider>
      <VStack>
        <Header />
        <About />
        <Projects />
      </VStack>
    </ChakraProvider>
  );
}

export default App;