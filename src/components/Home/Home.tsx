import {
    Button,
    Container,
} from "@mantine/core";

import Experience from "./Experience";
import Landing from "./Landing";


export default function Home() {
    return (
        <Container>
            <Landing />
            <Experience />
        </Container>
    );
}

