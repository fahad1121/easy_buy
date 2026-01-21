"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Chart03() {
    const [selected, setSelected] = useState("overview");

    return (
        <Container className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
            {/* Header */}
            <Container className="mb-6 flex flex-col gap-5 sm:flex-row sm:justify-between">
                <Container className="w-full">
                    <Heading level={3} className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        Statistics
                    </Heading>
                    <Text className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
                        Target you’ve set for each month
                    </Text>
                </Container>

                <Container className="flex w-full items-start gap-3 sm:justify-end">
                    {/* Tabs */}
                    <Container className="inline-flex w-fit items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
                        {[
                            { key: "overview", label: "Overview" },
                            { key: "sales", label: "Sales" },
                            { key: "revenue", label: "Revenue" },
                        ].map((item) => (
                            <Button
                                key={item.key}
                                onClick={() => setSelected(item.key)}
                                className={`rounded-md px-3 py-2 text-theme-sm font-medium transition hover:text-gray-900 dark:hover:text-white ${
                                    selected === item.key
                                        ? "bg-white text-gray-900 shadow-theme-xs dark:bg-gray-800 dark:text-white"
                                        : "text-gray-500 dark:text-gray-400"
                                }`}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Container>

                    <Container className="relative w-fit">
                        <Input
                            readOnly
                            placeholder="Select dates"
                            className="datepicker h-10 w-full max-w-11 rounded-lg border border-gray-200 bg-white py-2.5 pl-[34px] pr-4 text-theme-sm font-medium text-gray-700 shadow-theme-xs focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 xl:max-w-fit xl:pl-11"
                        />
                        <Container className="pointer-events-none absolute inset-0 left-4 right-auto flex items-center">
                            <svg
                                className="fill-gray-700 dark:fill-gray-400"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.66683 1.54199C7.08104 1.54199 7.41683 1.87778 7.41683 2.29199V3.00033H12.5835V2.29199C12.5835 1.87778 12.9193 1.54199 13.3335 1.54199C13.7477 1.54199 14.0835 1.87778 14.0835 2.29199V3.00033L15.4168 3.00033C16.5214 3.00033 17.4168 3.89576 17.4168 5.00033V7.50033V15.8337C17.4168 16.9382 16.5214 17.8337 15.4168 17.8337H4.5835C3.47893 17.8337 2.5835 16.9382 2.5835 15.8337V7.50033V5.00033C2.5835 3.89576 3.47893 3.00033 4.5835 3.00033L5.91683 3.00033V2.29199C5.91683 1.87778 6.25262 1.54199 6.66683 1.54199ZM6.66683 4.50033H4.5835C4.30735 4.50033 4.0835 4.72418 4.0835 5.00033V6.75033H15.9168V5.00033C15.9168 4.72418 15.693 4.50033 15.4168 4.50033H13.3335H6.66683ZM15.9168 8.25033H4.0835V15.8337C4.0835 16.1098 4.30735 16.3337 4.5835 16.3337H15.4168C15.693 16.3337 15.9168 16.1098 15.9168 15.8337V8.25033Z"
                                />
                            </svg>
                        </Container>
                    </Container>
                </Container>
            </Container>

            <Container className="custom-scrollbar max-w-full overflow-x-auto">
                <Container id="chartThree" className="-ml-4 min-w-[700px] pl-2" />
            </Container>
        </Container>
    );
}
