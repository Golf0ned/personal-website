import { Link } from "react-router";

import {
    Burger,
    Button,
    Collapse,
    Container,
    Group,
    Image,
    Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Blog from "./Blog";
import ColorSchemeSwitcher from "./ColorSchemeSwitcher";
import Resume from "./Resume";


const links = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
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
        <Container>
            <Group mt={4} justify="flex-end">
                <Button
                    variant="transparent"
                    color="--mantine-color-default-color"
                    size="compact-lg"
                    leftSection={<Image src="../assets/honktie.png" h={32} />}
                    component={Link}
                    to="/"
                >
                    Benjamin Ye
                </Button>

                <Group visibleFrom="sm" gap="xs">
                    {items}
                </Group>

                <Group ml="auto" pt={4}>
                    <Blog />
                    <Resume />
                    <ColorSchemeSwitcher />
                </Group>
                
                <Burger
                    hiddenFrom="sm"
                    opened={opened}
                    onClick={toggle}
                    size="sm"
                />
            </Group>
            <Collapse hiddenFrom="sm" in={opened}>
                <Paper mt={-0.5} p="md">{items_burger}</Paper>
            </Collapse>
        </Container>
    );
}

