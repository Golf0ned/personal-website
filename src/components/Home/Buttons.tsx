import {
    Button,
    Group,
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
            href: "#about",
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
            href={href}
        >
            {text}
        </Button>
    );
}

export default function Buttons() {
    const buttonGroups = buttons.map((group, index) => (
        <Group key={index}>
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

    return (
        <Group justify="center" mt="xl">
            {buttonGroups}
        </Group>
    );
}
