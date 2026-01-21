"use client";

import {useState} from "react";
import {Menu} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import logo from "@/public/assets/images/logo/logo.svg";
import logo_dark from "@/public/assets/images/logo/logo-dark.svg";
import logo_icon from "@/public/assets/images/logo/logo-icon.svg";
import Aside from "@/components/ui/Aside";
import Span from "@/components/ui/Span";
import Nav from "@/components/ui/Nav";
import UnorderList from "@/components/ui/UnorderList";
import List from "@/components/ui/List";
import {isActivated} from "@/components/utils/isActivated";
import {usePathname} from 'next/navigation';

// @ts-ignore
export default function Sidebar({collapsed, setCollapsed}) {
    const [selected, setSelected] = useState("");
    const [page, setPage] = useState("home");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => isActivated(pathname, href);

    return (
        <>
            <Button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="fixed top-4 left-4 z-20 lg:hidden bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full shadow"
            >
                <Menu/>
            </Button>
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <Aside
                className={`sidebar fixed left-0 top-0 z-9999 flex h-screen w-[260px] flex-col overflow-y-hidden border-r
        border-gray-200 bg-white px-5 dark:border-gray-800 transition-transform duration-300 dark:bg-black 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:static lg:translate-x-0 
        ${collapsed ? "lg:w-[85px]" : "lg:w-[260px]"}`}
            >
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="absolute right-4 top-4 lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <Container
                    className={`flex items-center gap-2 pt-8 pb-7 sidebar-header ${collapsed ? "lg:justify-center" : "justify-between"}`}>
                    <Link href="/" onClick={() => setSidebarOpen(false)}>
                        <Span className={`logo ${collapsed ? "lg:hidden" : ""}`}>
                            <Image
                                className="dark:hidden"
                                src={logo}
                                alt="Logo"
                            />
                            <Image
                                className="hidden dark:block"
                                src={logo_dark}
                                alt="Logo"
                            />
                        </Span>
                        <Image
                            className={`logo-icon ${collapsed ? "lg:block hidden" : "hidden"}`}
                            src={logo_icon}
                            alt="Logo Icon"
                        />
                    </Link>
                </Container>

                <Container className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                    <Nav>
                        <Container>
                            <Heading level={3} className="mb-4 text-xs uppercase leading-[20px] text-gray-400">
                                <Span
                                    className={`menu-group-title ${collapsed ? "lg:hidden" : ""}`}>MENU</Span>
                                <svg
                                    className={`mx-auto fill-current menu-group-icon ${collapsed ? "lg:block hidden" : "hidden"}`}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z"
                                    />
                                </svg>
                            </Heading>

                            <UnorderList className="flex flex-col gap-4 mb-6">

                                {/* ================= Dashboard ================= */}
                                <List>
                                    <Link
                                        href="/home"
                                        onClick={() => setSidebarOpen(false)}
                                        className={`menu-item group ${
                                            isActive("/home")
                                                ? "menu-item-active"
                                                : "menu-item-inactive"
                                        }`}
                                    >
                                        {/* Dashboard Icon */}
                                        <svg className="menu-item-icon-active" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <path d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"/>
                                        </svg>

                                        <Span className={`menu-item-text ${collapsed ? "lg:hidden" : ""}`}>
                                            Dashboard
                                        </Span>
                                    </Link>
                                </List>

                                {/* ================= Products ================= */}
                                <List>
                                    <Link
                                        href="/products"
                                        onClick={() => setSidebarOpen(false)}
                                        className={`menu-item group ${
                                            isActive("/products")
                                                ? "menu-item-active"
                                                : "menu-item-inactive"
                                        }`}
                                    >
                                        <svg className="menu-item-icon-inactive" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16Z"/>
                                        </svg>

                                        <Span className={`menu-item-text ${collapsed ? "lg:hidden" : ""}`}>
                                            Products
                                        </Span>
                                    </Link>
                                </List>

                                {/* ================= Orders ================= */}
                                <List>
                                    <Link
                                        href="/orders"
                                        onClick={() => setSidebarOpen(false)}
                                        className={`menu-item group ${
                                            isActive("/orders")
                                                ? "menu-item-active"
                                                : "menu-item-inactive"
                                        }`}
                                    >
                                        {/* Orders Icon */}
                                        <svg className="menu-item-icon-inactive" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <path d="M6 2h12a2 2 0 0 1 2 2v16l-4-2-4 2-4-2-4 2V4a2 2 0 0 1 2-2Z"/>
                                        </svg>

                                        <Span className={`menu-item-text ${collapsed ? "lg:hidden" : ""}`}>
                                            Orders
                                        </Span>
                                    </Link>
                                </List>

                                {/* ================= Customers ================= */}
                                <List>
                                    <Link
                                        href="/customers"
                                        onClick={() => setSidebarOpen(false)}
                                        className={`menu-item group ${
                                            isActive("/customers")
                                                ? "menu-item-active"
                                                : "menu-item-inactive"
                                        }`}
                                    >
                                        {/* Customers Icon */}
                                        <svg className="menu-item-icon-inactive" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z"/>
                                        </svg>

                                        <Span className={`menu-item-text ${collapsed ? "lg:hidden" : ""}`}>
                                            Customers
                                        </Span>
                                    </Link>
                                </List>

                            </UnorderList>

                        </Container>
                    </Nav>
                </Container>
            </Aside>
        </>
    )
}