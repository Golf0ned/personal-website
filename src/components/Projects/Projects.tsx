import {
    Container,
    Grid,
    Title,
} from "@mantine/core";

import ProjectCard from "./ProjectCard";


const projects = [
    {
        name: "Project 1",
        image: "/honktie.png",
        description: "Project 1 description.",
        github: "https://github.com",
        external: "https://example.com",
    },
    {
        name: "Project 2",
        image: "/nu-miku.jpg",
        description: "Project 2 description.",
        github: "https://github.com",
        external: "https://example.com",
    },
];


export default function Projects() {

    const projectCards = projects.map((project) => (
        <Grid.Col
            span={{ base: 12, sm: 6, lg: 4 }}
        >
            <ProjectCard
                key={project}
                name={project.name}
                image={project.image}
                description={project.description}
                github={project.github}
                external={project.external}
            />
        </Grid.Col>
    ));

    return (
        <Container>
            <Title order={1}>Projects</Title>
            <Grid>
                {projectCards}
            </Grid>
        </Container>
    );
}
