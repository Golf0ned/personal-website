import {
    Text,
} from "@mantine/core";


const title = "Fast-Tracking Coding Expertise";
const date = "7/13/2025";

const content = () => {
    return (
        <>
            <Text>
                Content here!
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
