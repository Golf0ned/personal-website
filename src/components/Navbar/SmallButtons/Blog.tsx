import {
    ActionIcon,
    Tooltip,
} from "@mantine/core";

import { IconNotebook } from "@tabler/icons-react";


export default function Blog() {
    return (
        <Tooltip label="Blog">
            <ActionIcon
                variant="default"
                size="lg"
                component="a"
            >
                <IconNotebook />
            </ActionIcon>
        </Tooltip>
    );
}
