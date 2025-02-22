import {
    useMantineColorScheme,
} from '@mantine/core';

import { Button } from '@mantine/core';


export default function ColorSchemeSwitcher() {
    const { toggleColorScheme } = useMantineColorScheme();

    return (
        <Button onClick={() => toggleColorScheme()}>
            toggle
        </Button>
    );
}
