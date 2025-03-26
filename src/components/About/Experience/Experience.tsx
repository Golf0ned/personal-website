import {
    Stack,
    Title,
} from "@mantine/core";

import {
    IconBriefcase2,
    IconSchool,
} from "@tabler/icons-react";

import ExperienceTimeline from "./ExperienceTimeline";

import { education, work } from "data/experience";


export default function Experience() {
    return (
        <Stack gap="md">
            <Title order={1}>Experience</Title>
            <ExperienceTimeline
                title="Education"
                data={education}
                icon={<IconSchool />}
                color="blue"
            />
            <ExperienceTimeline
                title="Work"
                data={work}
                icon={<IconBriefcase2 />}
                color="teal"
            />
        </Stack>
    );
}
