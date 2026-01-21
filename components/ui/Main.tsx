import { ReactNode } from "react";

interface MainProps {
    className?: string;
    children?: ReactNode;
}

export default function Main({ className = "", children }: MainProps) {
    return <div className={className}>{children}</div>;
}
