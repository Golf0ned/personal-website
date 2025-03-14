import {
    BackgroundImage,
    Badge,
    Box,
    Button,
    Card,
    Group,
    Text,
    Title,
} from "@mantine/core";
import {
    IconBrandGithub,
} from "@tabler/icons-react";


interface props {
    image: string;
    name: string;
    description: string;
    github: string;
}

export default function FeaturedCard({ image, name, description, github }: props) {
    return (
        <Card withBorder h={250}>
            <Card.Section>
                <Group grow>
                    <BackgroundImage src={image}>
                        <Box h={250}/>
                    </BackgroundImage>
                    <Card ml="-7">
                        <Card.Section withBorder>
                            <Group justify="space-between" m="xs">
                                <Title order={3}>{name}</Title>
                                <Badge>Featured</Badge>
                            </Group>
                        </Card.Section>
                        <Text mt="sm" mb="120">{description}</Text>
                    </Card>
                </Group>
            </Card.Section>
        </Card>
    );
}
