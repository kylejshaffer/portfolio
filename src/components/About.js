import headshot from "../assets/headshot.webp";
import useTypewriter from "../hooks/useTypeWriter";
import { Avatar, Heading, HStack, VStack, Text } from "@chakra-ui/react";

function Typewriter({ text, speed }) {
    const displayText = useTypewriter(text, speed);
    return <Heading className="typewriter">{displayText}</Heading>;
  };

function About() {
    return (
        <VStack mt={12} mb={28}>
            <VStack mb={4} spacing={12}>
                <Avatar src={headshot} width="200px" height="200px"/>
                <Typewriter text="Hi, I'm Kyle" speed={100}/>
            </VStack>
            <Text textAlign={"center"} maxWidth={{sm: "90%", md: "50%"}}>
                I'm an experienced Data Scientist based in Seattle looking to shift careers to a Frontend Developer role. 
                I'm interested in data visualization, responsive design, and data-centric applications. With
                10 years of experience working in data science and machine learning at several
                companies, I have a unique combination of skills including
                working in-depth with various types of data and presenting information to users
                in a clean, easy to understand way. I'm excited to learn more, and to get to work developing user-friendly
                applications that help people to be more productive and derive insights. Feel free to get in touch.
            </Text>
        </VStack>
    );
};

export default About;