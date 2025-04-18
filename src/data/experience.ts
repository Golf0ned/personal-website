interface Experience {
    location: string;
    title: string;
    range: string | [string, string];
    description?: string[];
    links?: Link[];
}

interface Link {
    name: string;
    url: string;
}

export const education: Experience[] = [
    {
        location: "Northwestern University",
        title: "Bachelor of Science, Computer Science",
        range: "Expected Winter 2027",
    },
    {
        location: "Eastlake High School",
        title: "High School Diploma",
        range: ["Sep 2018", "Jun 2022"],
    },
];

export const work: Experience[] = [
    {
        location: "Northwestern University",
        title: "Compiler Research Assistant",
        range: ["Mar 2024", "Present"],
        description: [
            "Working with ARCANA Lab to analyze and optimize LLVM-IR generated by Rust",
        ],
    },
    {
        location: "Northwestern University",
        title: "Peer Mentor",
        range: ["Jan 2024", "Present"],
    },
    {
        location: "Northwestern High School Institute",
        title: "Lab Leader",
        range: ["Jul 2022", "Aug 2023"],
    },
    {
        location: "Northwestern High School Institute",
        title: "Resident Assistant",
        range: ["Jul 2022", "Aug 2023"],
    },
];

export type { Experience };
