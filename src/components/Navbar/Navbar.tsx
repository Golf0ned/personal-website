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

import ColorSchemeSwitcher from "./ColorSchemeSwitcher";


const links = [
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];


export default function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Button
            key={link.label}
            variant="subtle"
            color="--mantine-color-default-color"
            onClick={(event) => {
                event.preventDefault();
            }}
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
                    size="compact-xl"
                    leftSection={<Image src="../assets/honktie.png" h={32} />}
                    mr="auto"
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                >
                    Benjamin Ye
                </Button>

                <Group visibleFrom="sm">
                    {items}
                </Group>

                <Group visibleFrom="sm">
                    {/*TODO: socials*/}
                </Group>
                
                <ColorSchemeSwitcher />
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

