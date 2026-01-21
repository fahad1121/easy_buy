import Container from "@/components/ui/Container";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";


export default function Register(){
    return (
        <form>
            <Container className="space-y-5">
                <Container className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <Container className="sm:col-span-1">
                        <Label
                            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                        >
                            First Name<span className="text-error-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="Enter your first name"
                            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                    </Container>
                    <Container className="sm:col-span-1">
                        <Label
                            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                        >
                            Last Name<span className="text-error-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="lname"
                            name="lname"
                            placeholder="Enter your last name"
                            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                    </Container>
                </Container>
                <Container>
                    <Label
                        className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                        Email<span className="text-error-500">*</span>
                    </Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                </Container>

                <Container>
                    <Label
                        className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                        Password<span className="text-error-500">*</span>
                    </Label>
                    <Container className="relative">
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                        <span
                            className="absolute z-30 text-gray-500 -translate-y-1/2 cursor-pointer right-4 top-1/2 dark:text-gray-400"
                        >
                                        </span>
                    </Container>
                </Container>
                <Container>
                    <Button
                        className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                    >
                        Sign Up
                    </Button>
                </Container>
            </Container>
        </form>
    )
}