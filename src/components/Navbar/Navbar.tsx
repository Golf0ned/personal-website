import { Link } from "react-router";

import {
    Burger,
    Button,
    Collapse,
    Container,
    Divider,
    Group,
    Paper,
    Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import HomeButton from "./HomeButton";
import SmallButtons from "./SmallButtons";


const links = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
];


export default function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Button
            key={link.label}
            variant="subtle"
            size="sm"
            mb={-4}
            color="--mantine-color-default-color"
            component={Link}
            to={link.href}
            style={{ fontSize: 16 }}
        >
            {link.label}
        </Button>
    ));

    const items_burger = links.map((link) => (
        <Button
            key={link.label}
            variant="default"
            color="--mantine-color-default-color"
            fullWidth
            onClick={(event) => {
                toggle();
                event.preventDefault();
            }}
        >
            {link.label}
        </Button>
    ));

    return (
        <Paper mih="50" mt="xs">
            <Container>
                <Group mt={4} justify="flex-end">
                    <HomeButton />

                    <Group visibleFrom="sm" gap="xs">
                        {items}
                    </Group>

                    <SmallButtons visibleFrom="sm"/>
                    
                    <Burger
                        ml="auto"
                        hiddenFrom="sm"
                        opened={opened}
                        onClick={toggle}
                        size="sm"
                    />
                </Group>
                <Collapse hiddenFrom="sm" in={opened}>
                    <Stack pt="xs">
                        <SmallButtons />
                        {items_burger}
                    </Stack>
                </Collapse>
            </Container>
            <Divider my="sm"/>
        </Paper>
    );
}

