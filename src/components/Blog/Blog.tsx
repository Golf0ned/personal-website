import {
    EqualHeight,
    EqualHeightElement,
} from "react-equal-height";

import {
    Container,
    Grid,
    Space,
    Title,
} from "@mantine/core";

import { blogData } from "./BlogData";
import type { BlogPost } from "./BlogData";

import BlogCard from "./BlogCard";


export default function Blog() {
    const blogCards = blogData.map((post: BlogPost) => (
        <Grid.Col
            key={post.slug}
            span={{ base: 12, sm: 6, lg: 4 }}
        >
            <EqualHeightElement name="blog-card">
                <BlogCard
                    title={post.title}
                    date={post.date}
                    slug={post.slug}
                    content={post.content}
                />
            </EqualHeightElement>
        </Grid.Col>
    ));

    return (
        <Container>
            <Title order={1}>Blog</Title>
            <Space h="lg"/>
            <EqualHeight>
                <Grid>
                    {blogCards}
                </Grid>
            </EqualHeight>
        </Container>
    );
}
