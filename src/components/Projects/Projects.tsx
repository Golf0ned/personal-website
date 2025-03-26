import {
    Container,
    Grid,
    Title,
} from "@mantine/core";

import ProjectCard from "./ProjectCard";

import { projects } from "data/projects";
import type { Project } from "data/projects";


export default function Projects() {
    const projectCards = projects.map((project: Project) => (
        <Grid.Col
            key={project.name}
            span={{ base: 12, sm: 6, lg: 4 }}
        >
            <ProjectCard
                name={project.name}
                image={project.image}
                description={project.description}
                github={project.github}
                external={project.external}
                tags={project.tags}
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
