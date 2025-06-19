import {
    Container,
    Stack,
} from "@mantine/core";

import Bio from "./Bio";
import Experience from "./Experience";
import Featured from "./Featured";
// import Skills from "./Skills";


export default function Home() {
    return (
        <Container>
                <Stack>
                    <Bio />
                    {/* <Skills /> */}
                    <Experience />
                    <Featured />
                </Stack>
        </Container>
    );
}

