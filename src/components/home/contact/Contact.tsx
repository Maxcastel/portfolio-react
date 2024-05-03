import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { ContactForm } from "./ContactForm";
import { Toaster } from "sonner";

export function Contact(){
    const { t } = useTranslation();

    return (
        <section className="flex flex-col min-h-screen relative dark:bg-slate-900 pb-[calc(40px+(40px*2))]" id="contact">
            <h2 className="text-center text-4xl font-bold my-10">
                {t('contact.title')}
            </h2>

            <Toaster />

            <div className="flex justify-center my-auto"> 
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">  */}
                <Card className="w-[680px]">
                    <CardContent className="p-6">
                        <ContactForm />
                    </CardContent>
                </Card>
            </div> 
        {/* </div> */}

        </section>
    )
}