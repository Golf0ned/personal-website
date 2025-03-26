import {
    List,
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
    const entries = data.map((entry: Experience) => {
        const range = typeof entry.range === "string" ? entry.range : entry.range.join(" - ");
        const description = entry.description?.map((desc: string) => (
            <List.Item key={desc}>{desc}</List.Item>
        ));

        return (
            <Timeline.Item
                key={`${title}-${entry.location}-${entry.title}`}
                title={entry.location}
                bullet={<IconPointFilled />}
            >
                <Text size="sm">{entry.title}</Text>
                <Text c="dimmed" size="sm">{range}</Text>
                {entry.description && <List size="sm" mt={4}>{description}</List>}
            </Timeline.Item>
        );
    });

    return (
        <Timeline
            active={Object.keys(data).length}
            color={color}
            lineWidth={5}
            bulletSize={30}
            ml="md"
        >
            <Timeline.Item key={`${title}-title`} bullet={icon}>
                <Title order={2} mb={-16} c={`${color}.7`}>{title}</Title>
            </Timeline.Item>
            {entries}
        </Timeline>
    );
}
