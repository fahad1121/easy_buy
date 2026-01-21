"use client";

import Container from "@/components/ui/Container";
import BreadCrumb from "@/components/partials/BreadCrumb";
import Form from "@/components/ui/Form";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import {useState} from "react";
import Textarea from "@/components/ui/Textarea";

export default function Page() {

    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");


    return (
        <Container className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
            <Container>
                <BreadCrumb title="Create a new product" prefix="products" page="create"/>
            </Container>

            <Container className="space-y-5 sm:space-y-6">
                <Container
                    className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
                    <Container className="p-5 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                            <Form className="w-full bg-white shadow-md rounded-lg p-8">

                                <Container className="mb-6">
                                    <Label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                        Product Name
                                    </Label>
                                    <Input
                                        className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="text"
                                        placeholder="Product name"
                                    />
                                </Container>

                                <Container className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <Container>
                                        <Label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                            Price
                                        </Label>
                                        <Input
                                            className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="number"
                                            placeholder="0.00"
                                        />
                                    </Container>

                                    <Container>
                                        <Label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                            SKU
                                        </Label>
                                        <Input
                                            className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="SKU-12345"
                                        />
                                    </Container>
                                </Container>

                                <Container className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <Container>
                                        <Label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                            Category
                                        </Label>
                                        <Select
                                            value={category}
                                            onChange={setCategory}
                                        />
                                    </Container>

                                    <Container>
                                        <Label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                            Stock Quantity
                                        </Label>
                                        <Input
                                            type="number"
                                            placeholder="100"
                                            className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                                        />
                                    </Container>
                                </Container>
                                <Container className="mb-6">
                                    <Label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                        Product Description
                                    </Label>
                                    <Textarea
                                        value={description}
                                        onChange={setDescription}
                                    />
                                </Container>

                                <Container className="mb-6">
                                    <Label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                        Product Image
                                    </Label>
                                    <Input
                                        type="file"
                                        className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
                                    />
                                </Container>

                                <Container className="mb-6">
                                    <Label className="inline-flex items-center">
                                        <Input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"/>
                                        <Span className="ml-2 text-gray-700">Active Product</Span>
                                    </Label>
                                </Container>

                                <Container className="flex justify-end">
                                    <Button
                                        type="submit"
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded"
                                    >
                                        Save Product
                                    </Button>
                                </Container>
                            </Form>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}