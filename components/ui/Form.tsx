import React, {ReactNode} from "react";

interface FormProps {
    className?: string,
    children?: ReactNode,
    ref?: React.RefObject<HTMLDivElement>
}

export default function Form({className = "", children, ref}: FormProps) {
    return <form className={className}>{children}</form>;
}
