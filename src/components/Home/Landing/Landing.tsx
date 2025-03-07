import { useState } from "react";

import {
    Button,
    Container,
    Group,
    Transition,
} from "@mantine/core";

import AnimatedTitle from "./AnimatedTitle";

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


export default function Landing({ onComplete }) {
    const [loadedTitle, setLoadedTitle] = useState(false);

    const buttonGroups = buttons.map((group, index) => (
        <Group key={index}>
            {group.map(({ text, icon, href, newTab }, index) => {
                if (newTab) {
                    return (
                        <Button
                            key={`${text}-${index}`}
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
                else {
                    return (
                        <Button
                            key={`${text}-${index}`}
                            variant="default"
                            size="md"
                            leftSection={icon}
                            href={href}
                        >
                            {text}
                        </Button>
                    );
                }
            })}
        </Group>
    ));

    const handleTitleLoad = () => {
        setLoadedTitle(true);
        setTimeout(() => {
            onComplete();
        }, 500);
    }

    return (
        <Container fluid={true} h="95vh" display="flex" style={{ alignItems: "center" }}>
            <Container fluid={true}>
                <AnimatedTitle
                    loaded={loadedTitle}
                    onComplete={() => {handleTitleLoad()}}
                />
                <Transition
                    mounted={loadedTitle}
                    transition="fade-up"
                    duration={200}
                    timingFunction="ease"
                >
                    {(styles) => (
                        <Group justify="center" mt="xl" style={styles}>
                            {buttonGroups}
                        </Group>
                    )}
                </Transition>
            </Container>
        </Container>
    )
}
