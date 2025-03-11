import {
    ActionIcon,
    Tooltip,
} from "@mantine/core";

import { IconFileText } from "@tabler/icons-react";


export default function Resume() {
    return (
        <Tooltip label="Resume">
            <ActionIcon
                variant="default"
                size="lg"
            >
                <IconFileText />
            </ActionIcon>
        </Tooltip>
    )
}
