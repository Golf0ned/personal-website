import { useEffect, useState } from "react";

import { Title } from "@mantine/core";

import classes from "./AnimatedTitle.module.css";


export default function AnimatedTitle({ loaded, onComplete }) {
    const [title, setTitle] = useState("");
    const fullTitle = "Hi. I'm Ben.";

    useEffect(() => {
        if (loaded) return;
        let i = 0;
        const interval = setInterval(() => {
            setTitle(fullTitle.slice(0, i++));
            if (i > fullTitle.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 500);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <Title
            order={1}
            align="center"
            size={84}
        >
            {title}<span className={classes.blinker}>|</span>
        </Title>
    );
}
