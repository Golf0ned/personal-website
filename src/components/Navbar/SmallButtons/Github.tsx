import {
    ActionIcon,
    Tooltip,
} from "@mantine/core";

import { IconBrandGithub } from "@tabler/icons-react";


export default function Github() {
    return (
        <Tooltip label="GitHub">
            <ActionIcon
                variant="default"
                size="lg"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/golf0ned"
            >
                <IconBrandGithub />
            </ActionIcon>
        </Tooltip>
    );
}
