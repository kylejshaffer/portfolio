import twitterapp from "../assets/twitter-app.png";
import llmapp from "../assets/llm-app.png";
import bandpage from "../assets/band-page.png";
import { Card, CardBody, CardFooter, Divider, Button, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { SimpleGrid, Link } from '@chakra-ui/react';

function ProjectCard({ heading, description, tools, screenshot, link }) {
    console.log(heading);
    return (
        <Card align='center'variant='outline' maxW='sm'>
            <CardBody>
                <Image
                src={screenshot}
                alt='Twitter app screenshot'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{heading}</Heading>
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
                <Button variant='solid' colorScheme='blue'>
                    <Link href={link}>Visit</Link>
                </Button>
            </CardFooter>
        </Card>
    )
};

function Projects() {
    const projData = [{
        heading: "Twitter Covid Sentiment Data App",
        description: "Data app visualizing sentiment expressed on Twitter during COVID-19.",
        tools: "D3.js, JavaScript, CSS, HTML",
        link: "https://covid-sentiment-viz.vercel.app/",
        screenshot: twitterapp,

    },
    {
        heading: "Visual Question Answering AI App",
        description: "Web-app for interacting with LLM, allowing users to upload images and ask AI questions about them.",
        tools: "React, JavaScript, REST APIs, HuggingFace",
        link: "https://vqa-llm-app.vercel.app/",
        screenshot: llmapp,

    },
    {
        heading: "Seattle Band No Edits Single-Page Site",
        description: "Single-page site for Seattle band No Edits.",
        tools: "React, JavaScript, ChakraUI",
        link: "https://noedits.vercel.app/",
        screenshot: bandpage,

    }];
    return (
        <>
        <Heading id="projects">Projects</Heading>
        <SimpleGrid columns={3} spacing={4}>
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
        <Divider />
        </>
    );
};

export default Projects;