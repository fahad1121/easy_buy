import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";


export default function ResetPassword(){
    return (
        <form>
            <Container className="space-y-5">
                <Container>
                    <Input type="email" placeholder="Enter your email" />
                </Container>

                <Container>
                    <Button
                        className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-blue-500 shadow-theme-xs hover:bg-blue-600"
                    >Send password reset link</Button>
                </Container>
            </Container>
        </form>
    )
}