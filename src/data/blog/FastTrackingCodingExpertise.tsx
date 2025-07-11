import {
    Text,
    Title,
} from "@mantine/core";


const title = "Fast-Tracking Coding Expertise";
const date = "7/13/2025";

const content = () => {
    return (
        <>
            <Title order={2}>
                Introduction
            </Title>
            <Text>
                Coming out of freshman year, I felt pretty good about my coding ability.
                The CS courses I had taken were pretty intuitive, my GPA was...on the way up, and I felt ready to tackle my first project.
            </Text>
        </>
    );
};

const article = {
    title,
    date,
    component: content,
};

export default article;
