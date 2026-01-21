import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Login(){
    return (
        <form>
            <Container className="space-y-5">
                <Container>
                    <Input type="email" placeholder="Enter your email" />
                </Container>
                <Container>
                    <Input type="password" placeholder="Enter your password" />
                </Container>

                <Container className="flex items-center justify-end">
                    <Link
                        href="/reset-password"
                        className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400"
                    >Forgot password?</Link
                    >
                </Container>

                <Container>
                    <Button
                        className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-blue-500 shadow-theme-xs hover:bg-blue-600"
                    >Sign In</Button>
                </Container>
            </Container>
        </form>
    )
}