import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Nav from "@/components/ui/Nav";
import List from "@/components/ui/List";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

interface BreadCrumbProps {
    title: string;
    page:string;
    prefix:string;
}

export default function BreadCrumb({title,page,prefix}:BreadCrumbProps) {
    return (
        <Container className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <Heading level={2} className="text-xl font-semibold text-gray-800 dark:text-white/90">{title}</Heading>

            <Nav>
                <ol className="flex items-center gap-1.5">
                    <List>
                        <Link className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400" href="/home">
                            Home
                            <svg
                                className="stroke-current"
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                                    stroke=""
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </List>
                    <Link href="/products" className="text-sm text-gray-800 dark:text-white/90">{prefix}</Link>
                    { page &&
                        <>
                        <svg
                        className="stroke-current"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                            stroke=""
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    <List className="text-sm text-gray-800 dark:text-white/90">{page}</List></>
                    }
                </ol>
            </Nav>
        </Container>
    )
}