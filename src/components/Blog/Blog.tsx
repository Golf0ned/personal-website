import {
    EqualHeight,
    EqualHeightElement,
} from "react-equal-height";

import {
    Container,
    Grid,
    Text,
    Title,
} from "@mantine/core";

import { posts } from "data/blog";
import type { BlogPost } from "data/blog";

import BlogCard from "./BlogCard";


export default function Blog() {
    const blogCards = posts.map((post: BlogPost) => (
        <Grid.Col
            key={post.slug}
            span={{ base: 12, sm: 6, lg: 4 }}
        >
            <EqualHeightElement name="blog-card">
                <BlogCard
                    title={post.title}
                    date={post.date}
                    slug={post.slug}
                />
            </EqualHeightElement>
        </Grid.Col>
    ));

    return (
        <Container>
            <Title order={1}>Blog</Title>
            <Text>Under construction!</Text>
            <EqualHeight>
                <Grid>
                    {blogCards}
                </Grid>
            </EqualHeight>
        </Container>
    );
}
