import Container from "@/components/ui/Container";
import Stats from "@/components/partials/MetricGroup01";
import RecentOrderTable from "@/components/partials/tables/Table01";

export default function Page(){

    return (
        <Container className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
            <Container className="grid grid-cols-12 gap-4 md:gap-6">
                <Container className="col-span-12 space-y-6 xl:col-span-12">
                    <Stats />
                </Container>

                <Container className="col-span-12 xl:col-span-12">
                    <RecentOrderTable />
                </Container>
            </Container>
        </Container>
    );
}