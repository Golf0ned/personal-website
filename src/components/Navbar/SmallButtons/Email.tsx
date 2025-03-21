import {
    ActionIcon,
    Tooltip,
} from "@mantine/core";

import { IconMail } from "@tabler/icons-react";


export default function Email() {
    return (
        <Tooltip label="Email">
            <ActionIcon
                variant="default"
                size="lg"
                component="a"
                href="mailto:benjaminye.email@gmail.com"
            >
                <IconMail />
            </ActionIcon>
        </Tooltip>
    );
}
