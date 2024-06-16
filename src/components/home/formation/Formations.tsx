import { Card, CardContent } from "@/components/ui/card";
import { FormationsTimeLine } from "./FormationsTimeLine";

export function Formations(){

    return (
        <section className="flex flex-col min-h-screen dark:dark:bg-slate-900" id="formations">
            <h2 className="text-center text-4xl font-bold my-10">
                Formations
            </h2>

            <div className="flex justify-center"> 
                <Card>
                    <CardContent className="pl-12 pt-20 pb-16 -mr-10 pr-0">
                        <FormationsTimeLine />
                    </CardContent>
                </Card>
            </div>

        </section>
    )
}