import { Link } from "react-router";

import {
    Button,
    Image,
} from "@mantine/core";


export default function HomeButton() {
    return (
        <Button
            variant="transparent"
            color="--mantine-color-default-color"
            size="compact-lg"
            maw={200}
            leftSection={<Image src="/honktie.png" h={32} w="auto"/>}
            component={Link}
            to="/"
        >
            Benjamin Ye
        </Button>
    );
}
