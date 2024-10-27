import ProjectCard from "./ProjectCard";
import { SimpleGrid } from '@chakra-ui/react'

export default function Projects() {
    const projData = [{
        heading: "Twitter Covid Sentiment Data App",
        description: "My twitter app.",
        tools: "D3.js",

    }];
    return (
        <SimpleGrid columns={2} spacing={10}>
            <ProjectCard props={projData}
            />
        </SimpleGrid>
    );
};