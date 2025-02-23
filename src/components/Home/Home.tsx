import { useState } from "react";

import {
    Button,
    Container,
    Transition,
} from "@mantine/core";

import Experience from "./Experience";
import Landing from "./Landing";


export default function Home() {
    const [loadedLanding, setLoadedLanding] = useState(false);

    return (
        <Container>
            <Landing
                onComplete={() => setLoadedLanding(true)}
            />
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

