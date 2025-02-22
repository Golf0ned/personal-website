import {
    Button,
    Container,
    Group,
    Space,
    Title,
} from "@mantine/core";

import {
    IconCode,
    IconFileInvoice,
    IconMoodSmileBeam,
} from "@tabler/icons-react";


export default function Home() {
    return (
        <Container>
            <Title
                order={1}
                align="center"
                size={84}
                mt={128}
            >Hi, I'm Ben.</Title>
            <Group justify="center" mt="lg">
                <Button
                    variant="default"
                    size="md"
                    leftSection={<IconMoodSmileBeam />}
                >
                    Learn about me
                </Button>
                <Button
                    variant="default"
                    size="md"
                    leftSection={<IconFileInvoice />}
                >
                    Peek at my resume
                </Button>
                <Button
                    variant="default"
                    size="md"
                    leftSection={<IconCode />}
                >
                    Check out my work
                </Button>
            </Group>
        </Container>
    );
}
