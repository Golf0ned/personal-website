import {
    EqualHeight,
    EqualHeightElement,
} from "react-equal-height";

import {
    Container,
    Grid,
    Space,
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
            <EqualHeightElement name="project-card">
                <ProjectCard
                    name={project.name}
                    image={project.image ? project.image : "/projects/default.png"}
                    description={project.description}
                    github={project.github}
                    external={project.external}
                    tags={project.tags}
                />
            </EqualHeightElement>
        </Grid.Col>
    ));

    return (
        <Container>
            <Title order={1}>Projects</Title>
            <Space h="lg"/>
            <EqualHeight>
                <Grid>
                    {projectCards}
                </Grid>
            </EqualHeight>
        </Container>
    );
}
