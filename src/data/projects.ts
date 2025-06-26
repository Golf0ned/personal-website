interface Project {
    name: string;
    description: string;
    image?: string;
    github?: string;
    external?: string;
    tags?: ProjectTags[];
}

type ProjectTags = keyof typeof projectTagColors;

export const projectTagColors = {
    Featured: "yellow",
    Hackathon: "orange",
    Deprecated: "gray",
    Discord: "indigo",
    Web: "lime",
    CLI: "purple",
    Other: "teal",
}

export const projects: Project[] = [
    {
        name: "ResumeLang",
        description: "Custom language and toolchain for porting resumes to different formats.",
        image: "/projects/resumelang.png",
        github: "https://github.com/Golf0ned/ResumeLang",
        tags: [
            "Hackathon",
            "CLI",
        ],
    },
    {
        name: "Golf0ned.com",
        description: "My personal website, rewritten with React.",
        image: "/honktie.png",
        github: "https://github.com/Golf0ned/personal-website",
        external: "https://gol0ned.com",
        tags: [
            "Web",
        ],
    },
    {
        name: "reacto",
        description: "Discord bot that turns text into message reactions.",
        image: "/projects/reacto.png",
        github: "https://github.com/golf0ned/reacto",
        tags: [
            "Featured",
            "Discord",
        ],
    },
    {
        name: "NU Esports Bot",
        description: "The official Discord bot for the Northwestern Esports Discord server.",
        image: "/projects/nu-miku.jpg",
        github: "https://github.com/golf0ned/nu-esports-bot",
        tags: [
            "Featured",
            "Discord",
        ],
    },
    {
        name: "F-STARS",
        description: "FPGA-mounted system for detecting seismic activity on Mars using machine learning and signal processing.",
        github: "https://github.com/cjschilf/nasaspaceapps2024_stan5370",
        external: "https://www.youtube.com/watch?v=ScUdFu_6Ruw",
        tags: [
            "Hackathon",
            "Other",
        ]
    },
    {
        name: "Purple Hours",
        description: "Group-based queue system for office hours in Northwestern CS courses.",
        github: "https://github.com/394-s24/PurpleHours",
        external: "https://purple-hours-v2.web.app/",
        tags: [
            "Web",
        ],
    },
    {
        name: "LB-x86_64 Compiler",
        description: "Compiler from a C-like language to x86_64 assembly, implementing modern compilation techniques.",
        tags: [
            "CLI",
        ]
    },
    {
        name: "pairings-bot",
        description: "Discord bot to post tabroom pairings.",
        github: "https://github.com/Golf0ned/pairings-bot",
        tags: [
            "Discord",
        ]
    },
    // {
    //     name: "CS Investment Tracker",
    //     description: "Tracker for Counter-Strike investments that pulls data from Steam and tracks profit.",
    //     image: "/honktie.png",
    //     github: "https://github.com/Golf0ned/csgo-investments",
    //     external: "https://golf0ned.github.io/csgo-investments/",
    //     tags: [
    //         "Deprecated",
    //         "Web",
    //     ]
    // },
];

export type { Project, ProjectTags };
