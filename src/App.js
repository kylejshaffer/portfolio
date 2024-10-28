import { ChakraProvider } from "@chakra-ui/react";
import {VStack } from "@chakra-ui/react";
import  Header from "./components/Header";
import About from "./components/About";
import Projects from './components/Projects';
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <VStack>
        <Header />
        <About />
        <Projects />
        <Experience />
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}

export default App;