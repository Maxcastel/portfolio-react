import { useTranslation } from "react-i18next";
import { Email } from "./Email";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export function EmailCard({email}:{email:Email}){
    const { t } = useTranslation();
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('contact.objet')} {email.subject}</CardTitle>
                <CardDescription>
                    {t('contact.from')} {email.email} <br />
                    {new Date(email.sendDate).toLocaleString('fr-FR', { timeZone: 'Europe/Paris'})}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <CardDescription>
                    <Button asChild>
                        <a href={`/admin/emails/${email.id}`}>
                            {t('contact.seeBtn')}
                        </a>
                    </Button>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}