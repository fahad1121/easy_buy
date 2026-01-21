import Image from "next/image";
import AuthLogo from '@/public/assets/images/logo/auth-logo.svg';
import Shape from "@/components/Shape";
import Link from "next/link";
import LoginForm from "@/components/forms/Login";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

export default function Login() {
    return (
        <>
            <Container className="flex flex-col flex-1 w-full lg:w-1/2">
                <Container
                    className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto"
                >
                    <Container>
                        <Container className="mb-5 sm:mb-8">
                            <Heading level={1}
                                className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md"
                            >
                                Sign In
                            </Heading>
                            <Text className="text-sm text-gray-500 dark:text-gray-400">
                                Enter your email and password to sign in!
                            </Text>
                        </Container>
                        <Container>
                            <LoginForm />

                            <Container className="mt-5">
                                <p
                                    className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start"
                                >
                                    Don&#39;t have an account? &nbsp;
                                    <Link
                                        href="/register"
                                        className="text-blue-500 hover:text-blue-700 dark:text-blue-400"
                                    >Sign Up</Link>
                                </p>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>

            <Container
                className="relative items-center hidden w-full h-full bg-brand-950 dark:bg-white/5 lg:grid lg:w-1/2"
            >
                <Container className="flex items-center justify-center z-1">

                    <Shape />
                    <Container className="flex flex-col items-center max-w-xs">
                        <Link href="/" className="block mb-4">
                            <Image
                                src={AuthLogo}
                                alt="Logo"
                                width={150}
                                height={150}
                                priority
                            />
                        </Link>
                        <Text className="text-center text-gray-400 dark:text-white/60">
                            Login here to access you dashboard pannel to manage your data
                        </Text>
                    </Container>
                </Container>
            </Container>
        </>
    );
}
