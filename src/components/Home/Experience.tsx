import {
    Container,
    Stack,
    Text,
    Timeline,
    Title,
} from "@mantine/core";

import {
    IconPointFilled,
    IconSchool,
} from "@tabler/icons-react";


const education = [
    {
        school: "Northwestern University",
        degree: "Bachelor of Science, Computer Science",
        range: "Expected Winter 2027",
    },
];

const organizations = [
    {
        organization: "Northwestern Esports",
        position: "Bot Developer",
        start: "Jan. 2023",
        end: "Present",
    },
    {
        organization: "Northwestern Debate Society",
        position: "Debater",
        start: "Sept. 2022",
        end: "Present",
    },
]

const work = [
    {
        company: "Northwestern University",
        title: "Compiler Research Assistant",
        start: "Mar. 2024",
        end: "Present",
    },
]


export default function Experience() {
    const educationEntries = education.map((entry) => (
        <Timeline.Item
            key={`school-${entry.school}-${entry.degree}`}
            title={entry.school}
            bullet={<IconPointFilled />}
        >
            <Text c="dimmed">{entry.degree}</Text>
            <Text c="dimmed">{entry.range}</Text>
        </Timeline.Item>
    ));

    const organizationEntries = organizations.map((entry) => (
        <Timeline.Item
            key={`organization-${entry.organization}-${entry.position}`}
            title={entry.organization}
            bullet={<IconPointFilled />}
        >
            <Text c="dimmed">{entry.position}</Text>
            <Text c="dimmed">{entry.start} - {entry.end}</Text>
        </Timeline.Item>
    ));

    const workEntries = work.map((entry) => (
        <Timeline.Item
            key={`work-${entry.company}-${entry.title}`}
            title={entry.company}
            bullet={<IconPointFilled />}
        >
            <Text c="dimmed">{entry.title}</Text>
            <Text c="dimmed">{entry.start} - {entry.end}</Text>
        </Timeline.Item>
    ));

    return (
        <Container p={0}>
            <Stack spacing="md">
                <Title order={1}>Experience</Title>
                <Timeline
                    active={Object.keys(education).length}
                    lineWidth={5}
                    bulletSize={30}
                >
                    <Timeline.Item key="title" bullet={<IconSchool />}>
                        <Title order={3} mb={-16} c="blue.6">Education</Title>
                    </Timeline.Item>
                    {educationEntries}
                </Timeline>
                <Timeline
                    active={Object.keys(organizations).length}
                    color="green"
                    lineWidth={5}
                    bulletSize={30}
                >
                    <Timeline.Item key="title" bullet={<IconSchool />}>
                        <Title order={3} mb={-16} c="green.6">Organizations</Title>
                    </Timeline.Item>
                    {organizationEntries}
                </Timeline>
                <Timeline
                    active={Object.keys(work).length}
                    color="violet"
                    lineWidth={5}
                    bulletSize={30}
                >
                    <Timeline.Item key="title" bullet={<IconSchool />}>
                        <Title order={3} mb={-16} c="violet.6">Work</Title>
                    </Timeline.Item>
                    {workEntries}
                </Timeline>
            </Stack>
        </Container>
    );
}
