import headshot from "../assets/headshot.webp";
import { Avatar, Divider, Heading, HStack, VStack, Text } from "@chakra-ui/react";

function About() {
    return (
        <VStack mt={20} mb={28}>
            <HStack mb={4} spacing={16}>
                <Heading>Hi, I'm Kyle</Heading>
                <Avatar src={headshot} size="2xl"/>
            </HStack>
            <Text textAlign={"center"} maxWidth={{sm: "90%", md: "40%"}}>
                Hi there - my name is Kyle and I'm a Frontend Developer interested
                in data visualization, responsive design, and data-centric applications. I have
                10 years of experience working in data science and machine learning at various
                tech companies, and I'm excited to apply my skills  to develop user-friendly
                applications that help people be more productive and derive insights.
            </Text>
        </VStack>
    );
};

export default About;