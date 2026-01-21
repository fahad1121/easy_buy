export default function Text({ children, className = "", as = "p" }: any) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
}
