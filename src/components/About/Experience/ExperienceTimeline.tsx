import {
    Text,
    Title,
    Timeline,
} from "@mantine/core";

import {
    IconPointFilled,
} from "@tabler/icons-react";

import type { Experience } from "data/experience";


interface props {
    title: string;
    data: Experience[];
    icon: React.ReactNode;
    color: string;
}


export default function ExperienceTimeline({ title, data, icon, color }: props) {
    const entries = data.map((entry: Experience) => (
        <Timeline.Item
            key={`${title}-${entry.location}-${entry.title}`}
            title={entry.location}
            bullet={<IconPointFilled />}
        >
            <Text>{entry.title}</Text>
            <Text c="dimmed">
                {typeof entry.range === "string" ? entry.range : entry.range.join(" - ")}
            </Text>
        </Timeline.Item>
    ));

    return (
        <Timeline
            active={Object.keys(data).length}
            color={color}
            lineWidth={5}
            bulletSize={30}
            ml="md"
        >
            <Timeline.Item key={`${title}-title`} bullet={icon}>
                <Title order={3} mb={-16} c={`${color}.6`}>{title}</Title>
            </Timeline.Item>
            {entries}
        </Timeline>
    );
}
