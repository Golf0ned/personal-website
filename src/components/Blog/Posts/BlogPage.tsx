import { Link } from "react-router";

import {
    Button,
    Container,
    Text,
    Title,
} from "@mantine/core";

import type { BlogPost } from "data/blog";

export default function BlogPage({ title, date, ...props }: BlogPost) {
    return (
        <Container>
            <Title order={1}>{title}</Title>
            <Text c="dimmed" size="sm" mb="md">{date}</Text>
            {props.children}
            <Button
                variant="outline"
                component={Link}
                to="/blog"
            >
                Back
            </Button>
        </Container>
    );
}
