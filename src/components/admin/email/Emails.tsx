import { useEffect, useState } from "react"
import { Email } from "./Email";
import { EmailCard } from "./EmailCard";

export function Emails(){
    const [emails, setEmails] = useState<Email[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL+"/emails")
        .then((res) => res.json())
        .then((emails) => {
          setEmails(emails.data);
          setLoading(false);
        })
    }, [])

    if (loading) return

    return (
        <>
            <h1 className="text-2xl font-bold my-4">
                Emails
            </h1>
            
            <div className="flex flex-col items-start gap-y-4">
                {emails.slice().reverse().map((email) => (
                    <EmailCard key={email.id} 
                        email={email} 
                    />
                ))}
            </div>
        </>
    )
}