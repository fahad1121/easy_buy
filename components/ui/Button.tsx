import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "danger";
    loading?: boolean;
}

export default function Button({
                                   className,
                                   children,
                                   variant = "primary",
                                   loading = false,
                                   disabled,
                                   ...props
                               }: ButtonProps) {
    const baseStyles =
        "flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition shadow-theme-xs focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700",
        secondary:
            "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        outline:
            "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-200 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800",
        danger:
            "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 dark:bg-red-600 dark:hover:bg-red-700",
    };

    return (
        <button
            disabled={disabled || loading}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {loading && (
                <svg
                    className="w-4 h-4 mr-2 animate-spin text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                </svg>
            )}
            {children}
        </button>
    );
}
