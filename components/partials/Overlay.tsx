"use client";

import { useState } from "react";

export default function Overlay() {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    if (!sidebarToggle) return null;

    return (
        <div
            onClick={() => setSidebarToggle(false)}
            className="fixed z-9 h-screen w-full bg-gray-900/50 block lg:hidden"
        />
    );
}
