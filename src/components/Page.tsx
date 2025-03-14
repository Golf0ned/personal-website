import { useEffect } from "react";


interface Props {
    title: string;
    children: React.ReactNode;
}

export default function Page({ title, ...props }: Props) {
    useEffect(() => {
        document.title = title;
    }, [title]);
    
    return props.children;
}
