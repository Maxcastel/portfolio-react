import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { ContactForm } from "./ContactForm";
import { Toaster } from "sonner";

export function Contact(){
    const { t } = useTranslation();

    return (
        <section className="flex flex-col dark:bg-slate-900 pb-[20vh]" id="contact">
            <h2 className="text-center text-4xl font-bold my-10">
                {t('contact.title')}
            </h2>

            <Toaster />

            <div className="flex justify-center"> 
                <Card className="w-[680px]">
                    <CardContent className="p-6">
                        <ContactForm />
                    </CardContent>
                </Card>
            </div> 

        </section>
    )
}