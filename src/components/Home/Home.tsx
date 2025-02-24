import { useState } from "react";

import {
    Button,
    Container,
    Transition,
} from "@mantine/core";
import { Parallax } from "react-scroll-parallax";

import Experience from "./Experience";
import Landing from "./Landing";


export default function Home() {
    const [loadedLanding, setLoadedLanding] = useState(false);

    return (
        <Container>
            <Parallax speed={-100}>
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
                    <Container p={0} style={styles}>
                        <Experience />
                    </Container>
                )}
            </Transition>
        </Container>
    );
}

