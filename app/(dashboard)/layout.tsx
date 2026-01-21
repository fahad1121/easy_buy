"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Preloader from "@/components/Preloader";
import Sidebar from "@/components/partials/Sidebar";
import Container from "@/components/ui/Container";
import Overlay from "@/components/partials/Overlay";
import Header from "@/components/partials/Header";
import Main from "@/components/ui/Main";
import {useState} from "react";

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode;
}) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    return (
        <>
            <Preloader />

            <Container className="flex h-screen overflow-hidden">
                <Sidebar
                    collapsed={sidebarCollapsed}
                    setCollapsed={setSidebarCollapsed}
                />

                <Container
                    className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto"
                >
                    <Overlay />

                    <Header
                        sidebarCollapsed={sidebarCollapsed}
                        setSidebarCollapsed={setSidebarCollapsed}
                    />

                    <Main>
                        {children}
                    </Main>
                </Container>
            </Container>
        </>
    );
}
