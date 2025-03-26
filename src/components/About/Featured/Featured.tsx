import {
    Title,
} from "@mantine/core";

import FeaturedCard from "./FeaturedCard";

import { projects } from "data/projects";
import type { Project } from "data/projects";


export default function Featured() {
    const featuredCards = projects.map((project: Project) => (
        project.tags && project.tags.includes("Featured") && (
            <FeaturedCard
                key={project.name}
                image={project.image}
                name={project.name}
                description={project.description}
            />
        )));

    return (
        <>
            <Title order={1}>Featured Projects</Title>
            {featuredCards}
        </>
    );
}
