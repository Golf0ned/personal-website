interface BlogPost {
    title: string;
    date: string;
    slug: string;
}

function toSlug(title: string): string {
    return title.toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
}

export const posts: BlogPost[] = [
    {
        title: "Test Post",
        date: "7/10/2025",
        slug: toSlug("Test Post")
    }
];

export type { BlogPost };
