import { cn } from "@/lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}

export default function Label({ children, required, className, ...props }: LabelProps) {
    return (
        <label
            className={cn(
                "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400",
                className
            )}
            {...props}
        >
            {children}
            {required && <span className="text-error-500 ml-0.5">*</span>}
        </label>
    );
}
