import { Link } from "react-router";

import {
    Button,
    Card,
    Group,
    Text,
    Title,
} from "@mantine/core";

import type { BlogPost } from "./BlogData";

export default function BlogCard({ title, date, slug }: BlogPost) {
    return (
        <Card shadow="sm" withBorder h="100%">
            <Card.Section>
            {/* Placeholder for future image or media content */}
            </Card.Section>

            <Group
                justify="space-between"
                my="sm"
            >
                <Title order={3}>{title}</Title>
                <Text size="sm" color="dimmed">{date}</Text>
            </Group>

            <Button
                variant="outline"
                component={Link}
                to={`/blog/${slug}`}
            >
                Read More
            </Button>
        </Card>
    );
}
