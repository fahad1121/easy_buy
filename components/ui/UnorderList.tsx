import { ReactNode } from "react";

interface UnorderListProps {
    className?: string;
    children?: ReactNode;
}

export default function UnorderList({ className = "", children }: UnorderListProps) {
    return <ul className={className}>{children}</ul>;
}
