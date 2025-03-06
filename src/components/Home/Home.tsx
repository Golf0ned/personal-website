import { useState } from "react";

import {
    Card,
    Container,
    Stack,
    Transition,
} from "@mantine/core";
import { Parallax } from "react-scroll-parallax";

import Experience from "./Experience";
import Landing from "./Landing";


export default function Home() {
    const [loadedLanding, setLoadedLanding] = useState(false);

    return (
        <Container>
            <Parallax speed={-30}>
                <Landing
                    onComplete={() => setLoadedLanding(true)}
                />
            </Parallax>
            <Transition
                mounted={loadedLanding}
                transition="fade-up"
                duration={200}
                timingFunction="ease"
            >
                {(styles) => (    
                    <Stack style={styles}>
                        <Card radius="md">
                        </Card>
                        <Experience />
                    </Stack>
                )}
            </Transition>
        </Container>
    );
}

