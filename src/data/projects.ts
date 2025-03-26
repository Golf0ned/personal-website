interface Project {
    name: string;
    description: string;
    image: string;
    github?: string;
    external?: string;
    tags?: ProjectTags[];
}

type ProjectTags = keyof typeof projectTagColors;

export const projectTagColors = {
    Featured: "yellow",
    Discord: "teal",
    Web: "red",
}

export const projects: Project[] = [
    {
        name: "NU Esports Bot",
        description: "A Discord bot for the Northwestern Esports Discord server.",
        image: "/nu-miku.jpg",
        github: "https://github.com/Golf0ned/nu-esports-bot",
        tags: [
            "Featured",
            "Discord",
        ],
    },
    {
        name: "reacto",
        description: "A Discord bot that turns text into message reactions.",
        image: "/reacto.png",
        github: "https://github.com/golf0ned/reacto",
        tags: [
            "Featured",
            "Discord",
        ],
    }
];

export type { Project, ProjectTags };
