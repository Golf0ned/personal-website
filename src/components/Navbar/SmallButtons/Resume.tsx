import {
    ActionIcon,
    Tooltip,
} from "@mantine/core";

import { IconFileCertificate } from "@tabler/icons-react";


export default function Resume() {
    return (
        <Tooltip label="Resume">
            <ActionIcon
                variant="outline"
                color="violet"
                size="lg"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="/Resume_Benjamin_Ye.pdf"
            >
                <IconFileCertificate />
            </ActionIcon>
        </Tooltip>
    )
}
