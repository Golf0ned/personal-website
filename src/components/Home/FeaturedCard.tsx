import {
    AspectRatio,
    Badge,
    Button,
    Card,
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
                <Group>
                    <AspectRatio ratio={16 / 9} h="auto" style={{ flex: 1 }}>
                        <img src={image}/>
                    </AspectRatio>
                    <Container m="0" p="0" style={{ flex: 1 }}>
                        <Stack gap="md" justify="space-between">
                            <Group m="0" justify="space-between">
                                <Title order={3}>{name}</Title>
                                <Badge color="blue">New</Badge>
                            </Group>
                            <Text>{description}</Text>
                            <Button
                                component="a"
                                href={github}
                                mt="auto"
                            >
                                View on GitHub
                            </Button>
                        </Stack>
                    </Container>
                </Group>
        </Card>
    );
}
