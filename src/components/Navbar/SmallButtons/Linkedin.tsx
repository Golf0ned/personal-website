import {
    ActionIcon,
    Tooltip,
} from "@mantine/core";

import { IconBrandLinkedin } from "@tabler/icons-react";


export default function Linkedin() {
    return (
        <Tooltip label="LinkedIn">
            <ActionIcon
                variant="default"
                size="lg"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/benjamin-ye/"
            >
                <IconBrandLinkedin />
            </ActionIcon>
        </Tooltip>
    );
}
