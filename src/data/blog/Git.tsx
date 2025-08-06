import {
    List,
    Stack,
    Text,
    Title,
} from "@mantine/core";


const title = "A Gentle Introduction to Git";
const date = "8/6/2025";

const content = () => {
    return (
        <Stack>
            <Text>
                When I went through my university's CS intro sequence, I wasn't ever really given a formal explanation on what git is or how to use it. After 2 years and a lot of googling, I finally figured out what was going on. For better or for worse, this is the normal experience.
            </Text>
            <Text>
                Given how important git is in...literally anything software-adjacent, the quality of explanation for students feels a little lackluster, and the first search results when you look up "what is git" or "how to use git" throw the reader straight into the deep end.
            </Text>
            <Text>
                This guide is meant as a quick start for new students (first year?) that have never worked with git. While there is much more to learn, you should at least be able to begin using git in a project (alone or with others).
            </Text>

            <Title mt="md" order={2}>
                Part 0: What is Git?
            </Title>
            <List spacing="sm">
                <List.Item>
                    <Text fw={700}>What is git? </Text>
                    <Text>Software that lets you save snapshots of a project that you can go back to (like checkpoints in a video game) and sync those snapshots with others.</Text>
                </List.Item>
                <List.Item>
                    <Text fw={700}>Why git? </Text>
                    <Text>Many reasons, including creating a backup of your project, easily reverting changes that broke your project, transferring your project to another machine, and syncing your project between multiple people.</Text>
                </List.Item>
                <List.Item>
                    <Text fw={700}>Where is git used?</Text>
                    <Text>Everywhere in software development, it's industry standard. Large companies, open-source projects, academia, education, the list goes on.</Text>
                </List.Item>
                <List.Item>
                    <Text fw={700}>What is GitHub/GitLab/BitBucket? </Text>
                    <Text>A more powerful version of Google Drive/Onedrive/Dropbox, specifically for git.</Text>
                    <Text>They are websites that let you save git history to a server, and share it with others.</Text>
                    <Text>They also offer many other services including project management tools and code deployment automation.</Text>
                </List.Item>
                <List.Item>
                    <Text fw={700}>How do I install git?</Text>
                    <Text>Follow the steps for your OS <a target="_blank" rel="noopener noreferrer" href="https://git-scm.com/downloads">here</a>.</Text>
                    <Text>If using GitHub, create an account on <a target="blank" rel="noopener noreferrer" href="https://github.com/">GitHub</a>.</Text>
                </List.Item>
            </List>

            <Title mt="md" order={2}>
                Part 1: Using Git Alone
            </Title>
            <Title mt="md" order={2}>
                Part 2: Using Git With Others
            </Title>
            <Title mt="md" order={2}>
                Part 3: Other Pointers
            </Title>
        </Stack>
    );
};

const article = {
    title,
    date,
    component: content,
};
export default article;
