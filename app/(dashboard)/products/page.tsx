import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Basic from "@/components/partials/tables/Basic";
import BreadCrumb from "@/components/partials/BreadCrumb";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Page() {

    return (
        <Container className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
            <Container>
                <BreadCrumb title="Products" prefix="products" page=""/>
            </Container>

            <Container className="space-y-5 sm:space-y-6">
                <Container
                    className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
                    <Container className="px-5 py-4 sm:px-6 sm:py-5">
                        <Container className="flex items-center justify-between">
                            <Heading level={3} className="text-base font-medium text-gray-800 dark:text-white/90">
                                Product Listing
                            </Heading>

                            <Link href="/products/add"
                                  className="px-3 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 dark:text-white flex items-center gap-1">
                                <FontAwesomeIcon icon={faPlus} className="text-sm"/>
                                Product
                            </Link>
                        </Container>
                    </Container>

                    <Container className="p-5 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                        <Basic/>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}