import { useEffect } from "react";


export default function Page({ title, ...props }) {
    useEffect(() => {
        document.title = title;
    }, [title]);
    
    return props.children;
}
