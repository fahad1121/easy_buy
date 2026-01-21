"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logo/logo.svg";
import dark_logo from "@/public/assets/images/logo/logo-dark.svg";
import user_owner from "@/public/assets/images/user/owner.jpg";

export default function Header({ sidebarCollapsed, setSidebarCollapsed }) {
    const [menuToggle, setMenuToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const notifRef = useRef(null);
    const userRef = useRef(null);

    // click outside handling
    useEffect(() => {
        const handleClick = (e) => {
            if (notifRef.current && !notifRef.current.contains(e.target)) {
                setNotifOpen(false);
            }
            if (userRef.current && !userRef.current.contains(e.target)) {
                setUserOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // dark mode toggle
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header className="sticky top-0 z-[99999] flex w-full border-gray-200 bg-white lg:border-b dark:border-gray-800 dark:bg-gray-900">
            <div className="flex grow flex-col items-center justify-between lg:flex-row lg:px-6">
                {/* LEFT BAR */}
                <div className="flex w-full items-center justify-between gap-2 border-b border-gray-200 px-3 py-3 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4 dark:border-gray-800">
                    {/* Sidebar Toggle */}
                    <button
                        onClick={() => {
                            setSidebarCollapsed(!sidebarCollapsed);
                            setSidebarToggle(!sidebarToggle);
                        }}
                        className={`flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 dark:border-gray-800 dark:text-gray-300 ${
                            sidebarToggle ? "bg-gray-100 dark:bg-gray-800" : ""
                        }`}
                    >
                        {/* Desktop icon - always show three lines */}
                        <svg
                            className="hidden lg:block"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>

                        {/* Mobile hamburger - show three lines when sidebar is closed */}
                        {!sidebarToggle && (
                            <svg
                                className="lg:hidden"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="14" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        )}

                        {/* Mobile close - show X when sidebar is open */}
                        {sidebarToggle && (
                            <svg
                                className="lg:hidden"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="6" y1="6" x2="18" y2="18" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                            </svg>
                        )}
                    </button>

                    {/* Logo */}
                    <Link href="/" className="lg:hidden">
                        <Image className="dark:hidden" src={logo} alt="Logo" />
                        <Image className="hidden dark:block" src={dark_logo} alt="Logo" />
                    </Link>

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setMenuToggle(!menuToggle)}
                        className={`z-[99999] flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-800 ${
                            menuToggle ? "bg-gray-100 dark:bg-gray-800" : ""
                        }`}
                    >
                        <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
                            <circle cx="6" cy="12" r="1.5" />
                            <circle cx="12" cy="12" r="1.5" />
                            <circle cx="18" cy="12" r="1.5" />
                        </svg>
                    </button>

                    {/* Search (desktop) */}
                    <div className="hidden lg:block">
                        <input
                            type="text"
                            placeholder="Search or type command..."
                            className="h-11 w-[430px] rounded-lg border border-gray-200 bg-transparent px-4 text-sm dark:border-gray-800 dark:bg-white/[0.03]"
                        />
                    </div>
                </div>

                {/* RIGHT BAR */}
                <div
                    className={`${menuToggle ? "flex" : "hidden"} w-full items-center justify-between gap-4 px-5 py-4 lg:flex lg:justify-end lg:px-0`}
                >
                    {/* Dark mode toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800"
                    >
                        {darkMode ? (
                            <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                            </svg>
                        ) : (
                            <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>

                    {/* Notification */}
                    <div ref={notifRef} className="relative">
                        <button
                            onClick={() => setNotifOpen(!notifOpen)}
                            className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M10 16.25C11.1502 16.25 12.0833 15.3169 12.0833 14.1667H7.91667C7.91667 15.3169 8.84976 16.25 10 16.25Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M15.5666 13.0417H15L14.8241 12.2909C14.581 11.232 14.0927 10.2495 13.397 9.42176L12.9167 8.85842V6.66667C12.9167 4.62576 11.0409 3 8.75 3C6.45908 3 4.58333 4.62576 4.58333 6.66667V8.85842L4.10297 9.42176C3.40726 10.2495 2.91898 11.232 2.6759 12.2909L2.5 13.0417H1.93335C1.59618 13.0417 1.32292 13.3149 1.32292 13.6521C1.32292 13.9892 1.59618 14.2625 1.93335 14.2625H15.5666C15.9038 14.2625 16.1771 13.9892 16.1771 13.6521C16.1771 13.3149 15.9038 13.0417 15.5666 13.0417Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span className="absolute right-1 top-1 flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                            </span>
                        </button>

                        {notifOpen && (
                            <div className="absolute right-0 mt-4 w-80 rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                                    <span className="rounded-lg bg-brand-50 px-2 py-1 text-xs font-medium text-brand-500 dark:bg-brand-500/15">3 new</span>
                                </div>
                                <div className="mt-4 space-y-4">
                                    <div className="flex gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-500 dark:bg-brand-500/20">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">New user registered</h4>
                                            <p className="text-xs text-gray-500">30 min ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* User profile */}
                    <div ref={userRef} className="relative">
                        <button
                            onClick={() => setUserOpen(!userOpen)}
                            className="flex items-center gap-2"
                        >
                            <Image src={user_owner} className="h-11 w-11 rounded-full" alt="image owner" />
                            <span className="hidden text-sm font-medium sm:block">Musharof</span>
                        </button>

                        {userOpen && (
                            <div className="absolute right-0 mt-4 w-64 rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
                                <Link className="block rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/5" href="#">
                                    Edit profile
                                </Link>
                                <Link className="block rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/5" href="#">
                                    Settings
                                </Link>
                                <button className="mt-2 w-full rounded-lg bg-gray-100 px-3 py-2 text-left hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}