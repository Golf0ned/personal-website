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
        { text: "Learn about me", icon: <IconMoodSmileBeam /> },
        { text: "Check out my work", icon: <IconCode /> },
    ],
    [
        { text: "Peek at my resume", icon: <IconFileInvoice /> },
        { text: "Get in touch", icon: <IconMail /> },
    ],
];


export default function Landing({ onComplete }) {
    const [loadedTitle, setLoadedTitle] = useState(false);

    const buttonGroups = buttons.map((group, index) => (
        <Group key={index}>
            {group.map(({ text, icon }, index) => (
                <Button
                    key={text}
                    variant="default"
                    size="md"
                    leftSection={icon}
                >
                    {text}
                </Button>
            ))}
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
