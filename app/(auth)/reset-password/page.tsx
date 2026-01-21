import Shape from "@/components/Shape";
import AuthLogo from "@/public/assets/images/logo/auth-logo.svg";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import ResetPasswordForm from "@/components/forms/ResetPassword";
import Link from "next/link";

export default function ResetPassword() {
    return (
        <>
            <Container className="flex flex-col flex-1 w-full lg:w-1/2">
                <Container
                    className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto"
                >
                    <Container className="mb-5 sm:mb-8">
                        <Heading level={1}
                                 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md"
                        >
                            Reset Password
                        </Heading>
                        <Text className="text-sm text-gray-500 dark:text-gray-400">
                            Enter your email to get reset password link!
                        </Text>
                    </Container>
                    <Container>
                        <ResetPasswordForm />
                    </Container>
                </Container>
            </Container>
            <Container
                className="relative items-center hidden w-full h-full bg-brand-950 dark:bg-white/5 lg:grid lg:w-1/2"
            >
                <Container className="flex items-center justify-center z-1">
                    <Shape/>
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
                            Send forgot password link to the email address
                        </Text>
                    </Container>
                </Container>
            </Container>
        </>
    );
}
