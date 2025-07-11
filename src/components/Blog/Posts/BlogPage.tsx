import { Link } from "react-router";

import {
    Button,
    Container,
    Text,
    Title,
} from "@mantine/core";

import { posts } from "data/blog";
import type { BlogPost } from "data/blog";
import { postsData } from "./Pages";


export default function BlogPage({ title, date }: BlogPost) {
    // zip post titles to their respective pages in allPosts
    const titleToPage = Object.fromEntries(
        posts.map((post, i) => [post.title, postsData[i]])
    );

    return (
        <Container>
            <Title order={1}>{title}</Title>
            <Text c="dimmed" size="sm" mb="md">{date}</Text>
            
            {titleToPage[title]}

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
