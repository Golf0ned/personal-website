import {
    Text,
} from "@mantine/core";


const title = "TITLE_HERE";
const date = "DATE_HERE";

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
