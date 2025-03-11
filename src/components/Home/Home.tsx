import { useState } from "react";

import {
    Container,
    Transition,
} from "@mantine/core";

import AnimatedTitle from "./AnimatedTitle";
import Buttons from "./Buttons";


export default function Home() {
    const [loadedTitle, setLoadedTitle] = useState(false);

    return (
        <Container>
            <Container
                fluid
                pt="30vh"
                pb="25vh"
                display="flex"
                style={{ alignItems: "center" }}
            >
                <Container fluid>
                <AnimatedTitle
                    loaded={loadedTitle}
                    onComplete={() => setLoadedTitle(true)}
                />
                <Transition
                    mounted={loadedTitle}
                    transition="fade-up"
                    duration={200}
                    timingFunction="ease"
                >
                    {(styles) => (
                        <Container m={0} p={0} style={styles}>
                            <Buttons />
                        </Container>
                    )}
                </Transition>
                </Container>
            </Container>
        </Container>
    );
}

