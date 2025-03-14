import {
    Group,
} from "@mantine/core";

import Blog from "./Blog";
import ColorSchemeSwitcher from "./ColorSchemeSwitcher";
import Resume from "./Resume";


interface props {
    visibleFrom?: string;
}

export default function SmallButtons(props: props) {
    return (
        <Group ml={"auto"} visibleFrom={props.visibleFrom}>
            <Blog />
            <Resume />
            <ColorSchemeSwitcher />
        </Group>
    );
}
