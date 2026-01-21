import clsx from "clsx";
import {JSX, ReactNode} from "react";

type HeadingProps = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    className?: string;
};

export default function Heading({
                                    level = 1,
                                    children,
                                    className,
                                }: HeadingProps) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    const styles = {
        1: "mb-2 font-semibold text-gray-800 text-title-sm sm:text-title-md dark:text-white/90",
        2: "mb-2 font-semibold text-xl text-gray-800 dark:text-white/90",
        3: "text-lg font-medium text-gray-800 dark:text-white/90",
        4: "text-base font-medium text-gray-700 dark:text-white/80",
        5: "text-sm font-medium text-gray-600 dark:text-white/70",
        6: "text-xs font-medium text-gray-500 dark:text-white/60",
    };

    return (
        <Tag className={clsx(styles[level], className)}>
            {children}
        </Tag>
    );
}
