import { useDisclosure } from "@mantine/hooks";

import { Burger, Button, Group } from "@mantine/core";

import ColorSchemeSwitcher from "./ColorSchemeSwitcher";

const links = [
    { label: "Projects", href: "/projects" },
];


export default function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Button
            key={link.label}
            variant="subtle"
            component="a"
            href={link.href}
            onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </Button>
    ));

    return (
        <>
            <Group>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    size="sm"
                    hiddenFrom="sm"
                    aria-label="Toggle navigation"
                />
                { /* TODO: add logo */ }
                <div>Logo</div>
            </Group>

            <Group>
                
            </Group>

            <Group>
                <Group
                    ml={50}
                    gap={5}
                    visibleFrom="sm"
                >
                    {items}
                </Group>
                <ColorSchemeSwitcher />
            </Group>
        </>
    );
}

