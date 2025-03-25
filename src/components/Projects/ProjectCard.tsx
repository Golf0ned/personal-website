import {
    Button,
    Card,
    Group,
    Image,
    Text,
    Title,
} from "@mantine/core";

import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";


interface props {
    name: string;
    image: string;
    description: string;
    github?: string;
    external?: string;
}


export default function ProjectCard({ name, image, description, github, external }: props) {
    return (
        <Card shadow="sm" withBorder>
            <Card.Section>
                <Image src={image} height={200}/>
            </Card.Section>

            <Group 
                justify="space-between"
                my="sm"
            >
                <Title order={3}>{name}</Title>
            </Group>

            <Text>{description}</Text>

            <Group mt="sm" justify="space-around">
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
