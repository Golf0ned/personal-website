import { Link } from "react-router";

import {
    Button,
    Group,
    Stack,
} from "@mantine/core";

import {
    IconCode,
    IconFileInvoice,
    IconMail,
    IconMoodSmileBeam,
} from "@tabler/icons-react";


const buttons = [
    [
        { 
            text: "Learn about me",
            icon: <IconMoodSmileBeam />,
            href: "/about",
            newTab: false,
        },
        {
            text: "Check out my work",
            icon: <IconCode />,
            href: "/projects",
            newTab: false,
        },
    ],
    [
        {
            text: "Peek at my resume",
            icon: <IconFileInvoice />,
            href: "/assets/Resume_Benjamin_Ye.pdf",
            newTab: true,
        },
        {
            text: "Get in touch",
            icon: <IconMail />,
            href: "/contact",
            newTab: false,
        },
    ],
];


function ButtonNewTab({ text, icon, href }) {
    return (
        <Button
            variant="default"
            size="md"
            leftSection={icon}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            {text}
        </Button>
    );
}

function ButtonSameTab({ text, icon, href }) {
    return (
        <Button
            variant="default"
            size="md"
            leftSection={icon}
            component={Link}
            to={href}
        >
            {text}
        </Button>
    );
}

export default function Buttons() {
    const buttonGroups = buttons.map((group, index) => (
        <Group key={index} visibleFrom="sm">
            {group.map(({ text, icon, href, newTab }, index) => {
                if (newTab) {
                    return (
                        <ButtonNewTab
                            key={`${text}-${index}`}
                            text={text}
                            icon={icon}
                            href={href}
                        />
                    );
                }
                else {
                    return (
                        <ButtonSameTab
                            key={`${text}-${index}`}
                            text={text}
                            icon={icon}
                            href={href}
                        />
                    );
                }
            })}
        </Group>
    ));

    const buttonGroupsNarrow = buttons.map((group) => (
        group.map(({ text, icon, href, newTab }, index) => {
            if (newTab) {
                return (
                    <ButtonNewTab
                        key={`${text}-${index}-narrow`}
                        text={text}
                        icon={icon}
                        href={href}
                    />
                );
            }
            else {
                return (
                    <ButtonSameTab
                        key={`${text}-${index}-narrow`}
                        text={text}
                        icon={icon}
                        href={href}
                    />
                );
            }
        })
    ));

    return (
        <>
        <Group justify="center" mt="xl">
            {buttonGroups}
            <Stack gap="xs" hiddenFrom="sm">
                {buttonGroupsNarrow}
            </Stack>
        </Group>
        </>
    );
}
