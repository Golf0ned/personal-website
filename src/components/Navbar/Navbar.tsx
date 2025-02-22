import { useState } from "react";

import {
    Burger,
    Button,
    Container,
    Group,
    Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import ColorSchemeSwitcher from "./ColorSchemeSwitcher";

import classes from "./Navbar.module.css";


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
            href={link.href}
            onClick={(event) => {
                event.preventDefault();
            }}
        >
            {link.label}
        </Button>
    ));

    return (
        <Container>
            <Group mt={4}>
                <Button
                    variant="transparent"
                    color="--mantine-color-default-color"
                    size="compact-xl"
                    leftSection={<Image src="../assets/honktie.png" h={32} />}
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                >
                    Benjamin Ye
                </Button>

                <Group visibleFrom="sm" ml="auto">
                    {items}
                </Group>

                <Group visibleFrom="sm">
                    <ColorSchemeSwitcher />
                </Group>

                <Burger
                    ml="auto"
                    opened={opened}
                    onClick={toggle}
                    size="sm"
                    hiddenFrom="sm"
                    aria-label="Toggle navigation"
                />
            </Group>
        </Container>
    );
}

