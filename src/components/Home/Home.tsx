import { useState } from "react";

import {
    Container,
    Stack,
    Transition,
} from "@mantine/core";
import { Parallax } from "react-scroll-parallax";

import Experience from "./Experience";
import FeaturedCard from "./FeaturedCard";
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
                        <FeaturedCard
                            image="../assets/nu-miku.jpg"
                            name="NU Esports Bot"
                            description="A Discord bot for the NU Esports Discord server."
                            github="https://github.com/Golf0ned/nu-esports-bot"
                        />
                        <FeaturedCard
                            image="../assets/honktie.png"
                            name="reacto"
                            description="A Discord bot that turns text into message reactions."
                            github="https://github.com/Golf0ned/reacto"
                        />
                        <Experience />
                    </Stack>
                )}
            </Transition>
        </Container>
    );
}

