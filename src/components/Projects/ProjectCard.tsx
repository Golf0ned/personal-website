import {
    Badge,
    Button,
    Card,
    Group,
    Image,
    Space,
    Text,
    Title,
} from "@mantine/core";

import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";

import { projectTagColors } from "data/projects";
import type { Project, ProjectTags } from "data/projects";


export default function ProjectCard({ name, image, description, github, external, tags }: Project) {
    const tagElements = tags?.map((tag: ProjectTags) => (
        <Badge key={tag} color={projectTagColors[tag]}>
            {tag}
        </Badge>
    ));

    return (
        <Card shadow="sm" withBorder h="100%">
            <Card.Section>
                <Image src={image} height={200}/>
            </Card.Section>

            <Group 
                justify="space-between"
                my="sm"
            >
                <Title order={3}>{name}</Title>
                <Group>
                    {tagElements}
                </Group>
            </Group>

            <Text>{description}</Text>

            <Space h="sm" />

            <Group mt="auto" justify="space-around">
                {github &&
                    <Button
                        w={"45%"}
                        variant="filled"
                        leftSection={<IconBrandGithub />}
                        component="a"
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </Button>
                }
                {external &&
                    <Button
                        w={"45%"}
                        variant="filled"
                        leftSection={<IconExternalLink />}
                        component="a"
                        href={external}
                        target="_blank"
                        rel="noreferrer"
                    >
                        External
                    </Button>
                }
            </Group>
        </Card>
    );
}
