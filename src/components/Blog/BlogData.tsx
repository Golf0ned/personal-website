import fastTrackingCodingExpertise from "data/blog/FastTrackingCodingExpertise";
import git from "data/blog/Git";

const posts = [
    fastTrackingCodingExpertise,
    git,
];


interface BlogPost {
    title: string;
    date: string;
    slug: string;
    content: React.ReactNode;
}

function toSlug(title: string): string {
    return title.toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
}

export const blogData: BlogPost[] = posts.map((post) => ({
    title: post.title,
    date: post.date,
    slug: toSlug(post.title),
    content: post.component(),
}));

export type { BlogPost };
