import {
    Group,
} from "@mantine/core";

import Email from "./Email";
import Github from "./Github";
import Linkedin from "./Linkedin";
import Resume from "./Resume";


interface props {
    visibleFrom?: string;
}

export default function SmallButtons(props: props) {
    return (
        <Group ml={"auto"} visibleFrom={props.visibleFrom}>
            <Resume />
            <Email />
            <Linkedin />
            <Github />
        </Group>
    );
}
