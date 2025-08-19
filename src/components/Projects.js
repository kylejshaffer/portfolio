import twitterapp from "../assets/twitter-app.png";
import llmapp from "../assets/llm-app.png";
import birdchat from "../assets/bird-chat.png";
import climateapp from "../assets/climate-app.png";
import { Card, CardBody, CardFooter, Divider, Button, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { SimpleGrid, Link, VStack } from '@chakra-ui/react';

function ProjectCard({ heading, description, tools, screenshot, link }) {
    console.log(heading);
    return (
        <Card align='center'variant='outline' maxW='lg'>
            <CardBody>
                <Heading mb={2} align='center' size='md'>{heading}</Heading>
                <Image
                src={screenshot}
                alt='Twitter app screenshot'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Text>
                    {description}
                </Text>
                <Text color='blue.600' fontSize='xl'>
                    Tools: {tools}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button variant='outline' colorScheme='charcoal'>
                    <Link href={link} target="_blank" rel="noreferrer">Visit</Link>
                </Button>
            </CardFooter>
        </Card>
    )
};

function Projects() {
    const projData = [{
        heading: "Bird Chat LLM App",
        description: "Chat app for asking questions of RAG-LLM agent about ornithological blog posts.",
        tools: "LangChain, Flask, React, REST APIs",
        link: "https://bird-chat-app.vercel.app/",
        screenshot: birdchat,
    },
    {
        heading: "Climate Dashboard",
        description: "Web app visualizing temperature and precipitation from 2000-24 in the U.S.",
        tools: "D3.js, JavaScript, CSS, HTML",
        link: "https://climate-dashboard-phi.vercel.app/",
        screenshot: climateapp,
    },
    {
        heading: "Visual Question Answering AI App",
        description: "Web-app for interacting with LLM, allowing users to upload images and ask AI questions about them.",
        tools: "React, JavaScript, REST APIs, HuggingFace",
        link: "https://vqa-llm-app.vercel.app/",
        screenshot: llmapp,

    },
    {
        heading: "Twitter Covid Sentiment Data App",
        description: "Data app visualizing sentiment expressed on Twitter during COVID-19.",
        tools: "D3.js, JavaScript, CSS, HTML",
        link: "https://covid-sentiment-viz.vercel.app/",
        screenshot: twitterapp,

    }];
    return (
        <VStack mb={16}>
        <Heading id="projects-section">Projects</Heading>
        <Text textAlign={"center"} maxWidth={{sm: "90%", md: "50%"}}>
            Below, you can find some personal projects I've worked on
            to develop my skills in frontend development. I've used tools ranging
            from <Link href="https://react.dev/" target="_blank" rel="noreferrer">React</Link> and 
            <Link href="https://www.chakra-ui.com/" target="_blank" rel="noreferrer">ChakraUI</Link> to more specialized data visualization libraries
            like <Link href="https://d3js.org/" target="_blank" rel="noreferrer">D3.js</Link>, and I'm excited to learn more.
        </Text>
        <SimpleGrid columns={{sm: 2, md: 2}} spacing={4}>
            {projData.map(d => {
                return <ProjectCard
                heading={d.heading}
                description={d.description}
                tools={d.tools}
                link={d.link}
                screenshot={d.screenshot}
                />
            })
            }
        </SimpleGrid>
        </VStack>
    );
};

export default Projects;