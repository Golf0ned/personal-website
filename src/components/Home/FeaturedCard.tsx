import {
    BackgroundImage,
    Badge,
    Box,
    Button,
    Card,
    Center,
    Container,
    Group,
    Stack,
    Text,
    Title,
} from "@mantine/core";


interface props {
    image: string;
    name: string;
    description: string;
    github: string;
}

export default function FeaturedCard({ image, name, description, github }: props) {
    return (
        <Card withBorder h={300}>
            <Card.Section>
                <Group grow>
                    <BackgroundImage src={image}>
                        <Box h={300}/>
                    </BackgroundImage>
                    <Card ml="-7">
                        <Card.Section withBorder>
                            <Group justify="space-between" m="xs">
                                <Title order={3}>{name}</Title>
                                <Badge>Featured</Badge>
                            </Group>
                        </Card.Section>
                        <Text mt="sm" mb="150">{description}</Text>
                        <Card.Section>
                            <Group justify="flex-end" m="xs">
                            <Button variant="default">Github</Button>
                            </Group>
                        </Card.Section>
                    </Card>
                </Group>
            </Card.Section>
        </Card>
    );
}
