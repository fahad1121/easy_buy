import Preloader from "@/components/Preloader";
import Container from "@/components/ui/Container";

export default function LoginLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Preloader />

            <Container className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
                <Container
                    className="relative flex flex-col justify-center w-full h-screen dark:bg-gray-900 sm:p-0 lg:flex-row"
                >
                    {children}
                </Container>
            </Container>
        </>
    );
}
