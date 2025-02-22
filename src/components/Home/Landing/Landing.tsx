import { useState } from "react";

import {
    Button,
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


export default function Landing() {
    const [loaded, setLoaded] = useState(false);

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

    return (
        <>
            <AnimatedTitle
                mt={128}
                loaded={loaded}
                onComplete={() => {
                    setLoaded(true);
                }}
            />
            <Transition
                mounted={loaded}
                transition="pop"
                duration={200}
                timingFunction="ease"
            >
                {(styles) => (
                    <Group justify="center" mt="lg" style={styles}>
                        {buttonGroups}
                    </Group>
                )}
            </Transition>
        </>
    )
}
