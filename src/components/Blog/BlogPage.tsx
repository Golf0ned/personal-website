import { Link } from "react-router";

import {
    Button,
    Container,
    Text,
    Title,
} from "@mantine/core";

import type { BlogPost } from "./BlogData";


export default function BlogPage({ title, date, content }: BlogPost) {
    return (
        <Container>
            <Title order={1}>{title}</Title>
            <Text c="dimmed" size="sm" mb="md">{date}</Text>
            
            <>{content}</>

            <Button
                variant="outline"
                mt="md"
                component={Link}
                to="/blog"
            >
                Back
            </Button>
        </Container>
    );
}
