import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Span from "@/components/ui/Span";
import user17 from "@/public/assets/images/user/user-17.jpg";
import user22 from "@/public/assets/images/user/user-22.jpg";
import user23 from "@/public/assets/images/user/user-23.jpg";
import user24 from "@/public/assets/images/user/user-24.jpg";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Basic() {
    return (
        <Container
            className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <Container className="max-w-full overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                        <th className="px-5 py-3 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Title</Text>
                            </Container>
                        </th>
                        <th className="px-5 py-3 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Category</Text>
                            </Container>
                        </th>
                        <th className="px-5 py-3 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Price</Text>
                            </Container>
                        </th>
                        <th className="px-5 py-3 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Stock</Text>
                            </Container>
                        </th>
                        <th className="px-5 py-3 sm:px-6">
                            <Container className="flex items-center">
                                <Text
                                    className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Status</Text>
                            </Container>
                        </th>
                        <th className="px-5 py-3 sm:px-6">
                            <Container className="flex items-center">
                                <Text
                                    className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Action</Text>
                            </Container>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="Containeride-y Containeride-gray-100 dark:Containeride-gray-800">
                    <tr>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex items-center gap-3">
                                    <Container className="w-10 h-10 overflow-hidden rounded-full">
                                        <Image src={user17} alt="brand"/>
                                    </Container>
                                    <Container>
                                        <Span
                                            className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">Lindsey
                                            Curtis</Span>
                                        <Span className="block text-gray-500 text-theme-xs dark:text-gray-400">Web
                                            Designer</Span>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">Agency Website</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex -space-x-2">
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user22} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user23} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user24} alt="user"/>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text
                                    className="rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-700 dark:bg-success-500/15 dark:text-success-500">Active</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">3.9K</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">Delete</Button>
                            &nbsp;<Link href="/products/edit" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03]">Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex items-center gap-3">
                                    <Container className="w-10 h-10 overflow-hidden rounded-full">
                                        <Image src={user17} alt="brand"/>
                                    </Container>
                                    <Container>
                                        <Span
                                            className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">Lindsey
                                            Curtis</Span>
                                        <Span className="block text-gray-500 text-theme-xs dark:text-gray-400">Web
                                            Designer</Span>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">Agency Website</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex -space-x-2">
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user22} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user23} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user24} alt="user"/>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text
                                    className="rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-700 dark:bg-success-500/15 dark:text-success-500">Active</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">3.9K</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">Delete</Button>
                            &nbsp;<Link href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03]">Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex items-center gap-3">
                                    <Container className="w-10 h-10 overflow-hidden rounded-full">
                                        <Image src={user17} alt="brand"/>
                                    </Container>
                                    <Container>
                                        <Span
                                            className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">Lindsey
                                            Curtis</Span>
                                        <Span className="block text-gray-500 text-theme-xs dark:text-gray-400">Web
                                            Designer</Span>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">Agency Website</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex -space-x-2">
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user22} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user23} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user24} alt="user"/>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text
                                    className="rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-700 dark:bg-success-500/15 dark:text-success-500">Active</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">3.9K</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">Delete</Button>
                            &nbsp;<Link href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03]">Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex items-center gap-3">
                                    <Container className="w-10 h-10 overflow-hidden rounded-full">
                                        <Image src={user17} alt="brand"/>
                                    </Container>
                                    <Container>
                                        <Span
                                            className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">Lindsey
                                            Curtis</Span>
                                        <Span className="block text-gray-500 text-theme-xs dark:text-gray-400">Web
                                            Designer</Span>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">Agency Website</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex -space-x-2">
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user22} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user23} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user24} alt="user"/>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text
                                    className="rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-700 dark:bg-success-500/15 dark:text-success-500">Active</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">3.9K</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">Delete</Button>
                            &nbsp;<Link href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03]">Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex items-center gap-3">
                                    <Container className="w-10 h-10 overflow-hidden rounded-full">
                                        <Image src={user17} alt="brand"/>
                                    </Container>
                                    <Container>
                                        <Span
                                            className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">Lindsey
                                            Curtis</Span>
                                        <Span className="block text-gray-500 text-theme-xs dark:text-gray-400">Web
                                            Designer</Span>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">Agency Website</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex -space-x-2">
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user22} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user23} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user24} alt="user"/>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text
                                    className="rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-700 dark:bg-success-500/15 dark:text-success-500">Active</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">3.9K</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">Delete</Button>
                            &nbsp;<Link href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03]">Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex items-center gap-3">
                                    <Container className="w-10 h-10 overflow-hidden rounded-full">
                                        <Image src={user17} alt="brand"/>
                                    </Container>
                                    <Container>
                                        <Span
                                            className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">Lindsey
                                            Curtis</Span>
                                        <Span className="block text-gray-500 text-theme-xs dark:text-gray-400">Web
                                            Designer</Span>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">Agency Website</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex -space-x-2">
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user22} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user23} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user24} alt="user"/>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text
                                    className="rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-700 dark:bg-success-500/15 dark:text-success-500">Active</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">3.9K</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">Delete</Button>
                            &nbsp;<Link href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03]">Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex items-center gap-3">
                                    <Container className="w-10 h-10 overflow-hidden rounded-full">
                                        <Image src={user17} alt="brand"/>
                                    </Container>
                                    <Container>
                                        <Span
                                            className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">Lindsey
                                            Curtis</Span>
                                        <Span className="block text-gray-500 text-theme-xs dark:text-gray-400">Web
                                            Designer</Span>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">Agency Website</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex -space-x-2">
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user22} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user23} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user24} alt="user"/>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text
                                    className="rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-700 dark:bg-success-500/15 dark:text-success-500">Active</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">3.9K</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">Delete</Button>
                            &nbsp;<Link href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03]">Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex items-center gap-3">
                                    <Container className="w-10 h-10 overflow-hidden rounded-full">
                                        <Image src={user17} alt="brand"/>
                                    </Container>
                                    <Container>
                                        <Span
                                            className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">Lindsey
                                            Curtis</Span>
                                        <Span className="block text-gray-500 text-theme-xs dark:text-gray-400">Web
                                            Designer</Span>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">Agency Website</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Container className="flex -space-x-2">
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user22} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user23} alt="user"/>
                                    </Container>
                                    <Container
                                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                        <Image src={user24} alt="user"/>
                                    </Container>
                                </Container>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text
                                    className="rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-700 dark:bg-success-500/15 dark:text-success-500">Active</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Container className="flex items-center">
                                <Text className="text-gray-500 text-theme-sm dark:text-gray-400">3.9K</Text>
                            </Container>
                        </td>
                        <td className="px-5 py-4 sm:px-6">
                            <Button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">Delete</Button>
                            &nbsp;<Link href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03]">Edit</Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Container>
        </Container>

    )
}