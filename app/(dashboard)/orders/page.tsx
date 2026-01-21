"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import BreadCrumb from "@/components/partials/BreadCrumb";

type OrderStatus = "pending" | "completed" | "canceled";

interface Order {
    id: string;
    user: string;
    amount: string;
    status: OrderStatus;
    date: string;
}

export default function Page() {
    const [activeTab, setActiveTab] = useState<
        "all" | "pending" | "completed" | "canceled">("all");

    const orders: Order[] = [
        { id: "#ORD-1001", user: "John Doe", amount: "$120", status: "pending", date: "2026-01-10" },
        { id: "#ORD-1002", user: "Sarah Khan", amount: "$320", status: "completed", date: "2026-01-09" },
        { id: "#ORD-1003", user: "Ali Raza", amount: "$75", status: "canceled", date: "2026-01-08" },
        { id: "#ORD-1004", user: "Emma Watson", amount: "$210", status: "pending", date: "2026-01-07" },
    ];

    const filteredOrders =
        activeTab === "all"
            ? orders
            : orders.filter(order => order.status === activeTab);

    return (
        <Container className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
            <Container>
                <BreadCrumb title="Orders" prefix="orders" page="" />
            </Container>

            <Container className="space-y-5 sm:space-y-6">
                <Container className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
                    {/* Header */}
                    <Container className="px-5 py-4 sm:px-6 sm:py-5">
                        <Heading level={3} className="text-base font-medium text-gray-800 dark:text-white/90">
                            Orders History
                        </Heading>
                    </Container>

                    {/* Body */}
                    <Container className="p-5 border-t border-gray-100 dark:border-gray-800 sm:p-6 space-y-5">
                        {/* Tabs */}
                        <div className="flex gap-2 border-b border-gray-200 dark:border-gray-800">
                            {["all", "pending", "completed", "canceled"].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as any)}
                                    className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition
                                        ${
                                        activeTab === tab
                                            ? "border-blue-600 text-blue-600"
                                            : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 dark:border-gray-800 rounded-lg">
                                <thead className="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                                        Order ID
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                                        User
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                                        Amount
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                                        Date
                                    </th>
                                </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                {filteredOrders.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                                            No orders found
                                        </td>
                                    </tr>
                                ) : (
                                    filteredOrders.map(order => (
                                        <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                                            <td className="px-4 py-3 font-medium text-gray-800 dark:text-white">
                                                {order.id}
                                            </td>
                                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                                                {order.user}
                                            </td>
                                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                                                {order.amount}
                                            </td>
                                            <td className="px-4 py-3">
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-medium capitalize
                                                            ${
                                                            order.status === "pending" &&
                                                            "bg-yellow-100 text-yellow-700"
                                                        }
                                                            ${
                                                            order.status === "completed" &&
                                                            "bg-green-100 text-green-700"
                                                        }
                                                            ${
                                                            order.status === "canceled" &&
                                                            "bg-red-100 text-red-700"
                                                        }`}
                                                    >
                                                        {order.status}
                                                    </span>
                                            </td>
                                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                                                {order.date}
                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                        </div>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}
