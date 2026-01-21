import React, {ReactNode} from "react";

interface ContainerProps {
    className?: string,
    children?: ReactNode,
    ref?: React.RefObject<HTMLDivElement>
}

export default function Container({className = "", children, ref}: ContainerProps) {
    return <div className={className}>{children}</div>;
}
