import {
    Title,
} from "@mantine/core";

import FeaturedCard from "./FeaturedCard";


export default function Featured() {
    return (
        <>
            <Title order={1}>Featured Projects</Title>
            <FeaturedCard
                image="../assets/nu-miku.jpg"
                name="NU Esports Bot"
                description="A Discord bot for the NU Esports Discord server."
                github="https://github.com/Golf0ned/nu-esports-bot"
            />
            <FeaturedCard
                image="../assets/honktie.png"
                name="reacto"
                description="A Discord bot that turns text into message reactions."
                github="https://github.com/Golf0ned/reacto"
            />
        </>
    );
}
