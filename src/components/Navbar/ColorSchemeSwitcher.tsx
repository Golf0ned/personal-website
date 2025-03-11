import { useState } from "react";

import { 
    ActionIcon,
    Tooltip,
    useComputedColorScheme,
    useMantineColorScheme,
} from "@mantine/core";

import { IconSun, IconMoon } from "@tabler/icons-react";


export default function ColorSchemeSwitcher() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("dark");
    const [icon, setIcon] = useState(computedColorScheme === "dark" ? <IconSun /> : <IconMoon />);

    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
        setIcon(computedColorScheme === "dark" ? <IconMoon /> : <IconSun />);
    }

    return (
        <Tooltip label="Toggle Theme">
            <ActionIcon
                variant="default"
                size="lg"
                onClick={() => toggleColorScheme()}
            >
                {icon}
            </ActionIcon>
        </Tooltip>
    );
}
