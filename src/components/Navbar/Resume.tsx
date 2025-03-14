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
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="/assets/Resume_Benjamin_Ye.pdf"
            >
                <IconFileText />
            </ActionIcon>
        </Tooltip>
    )
}
