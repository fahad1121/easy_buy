import { ReactNode } from "react";

interface AsideProps {
    className?: string;
    children?: ReactNode;
}

export default function Aside({ className = "", children }: AsideProps) {
    return <aside className={className}>{children}</aside>;
}
