import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Email } from "./Email";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";

export function ShowEmail(){
    const { id } = useParams();
    const [email, setEmail] = useState<Email>();
    const [loading, setLoading] = useState<boolean>(true);
    const { t } = useTranslation();

    useEffect(() => {
        fetch(`/api/emails/${id}`)
        .then((res) => res.json())
        .then((email) => {
            setEmail(email.data);

            setLoading(false);
        })
    }, [])

    if (loading) return

    return (
        <div className="text-center my-4">
            {email && <>
                <h1 className="text-xl font-semibold">
                    {t('contact.objet')} {email.subject}
                </h1>
                <h2>
                    {t('contact.from')} {email.email}
                </h2>
                <p className="text-muted-foreground">{new Date(email.sendDate).toLocaleString('fr-FR', { timeZone: 'UTC'})}</p>

                <div className="mt-8" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(email.message) }} />
            </>}
        </div>
    )
}