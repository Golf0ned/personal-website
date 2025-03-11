import {
    ActionIcon,
    Tooltip,
} from "@mantine/core";

import { IconAddressBook } from "@tabler/icons-react";


export default function Socials() {
    return (
        <Tooltip label="Contact">
            <ActionIcon
                variant="default"
                size="lg"
            >
                <IconAddressBook />
            </ActionIcon>
        </Tooltip>
    )
}
