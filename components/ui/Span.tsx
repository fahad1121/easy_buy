import { ReactNode } from "react";

interface SpanProps {
    className?: string;
    children?: ReactNode;
}

export default function Span({ className = "", children }: SpanProps) {
    return <span className={className}>{children}</span>;
}
