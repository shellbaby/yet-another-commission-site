import { Accordion } from "@/components/custom/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
    return (
        <>
            <Card>
                <CardContent>
                    <div>
                        <h3 className="text-center">terms of service</h3>

                        <Accordion />
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
