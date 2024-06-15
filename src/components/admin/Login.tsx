import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from "react-router-dom";
import { ReloadIcon } from "@radix-ui/react-icons"
import { Loader2 } from "lucide-react"
import { useState } from "react";
import { useUserContext } from "../UserContextProvider";

export function Login(){
    const { t } = useTranslation();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const navigateTo = useNavigate();
    const {setToken,setIsAuth,setIsLoading} = useUserContext();

    const formSchema = z.object({
        email: z
            .string()
            .min(1, {message: t('loginCard.empty.email')})
            .email({message: t('loginCard.error.email')}),
        password: z
            .string()
            .min(1, {message: t('loginCard.empty.password')})
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        setLoading(true);

        try{
            fetch("/api/login_check", {
                method: 'POST',
                body: JSON.stringify({
                    username: data.email,
                    password: data.password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => response.json())
            .then(response => {
                setLoading(false);
                setIsLoading(false);
                if (response.code !== 401 && response.token){
                    navigateTo("/admin/projets");
                    setToken(response.token);
                    setIsAuth(true);
                }
                else{
                    setError(true);
                }
            })
        }
        catch(e){
            console.log("erreur",e);
            setLoading(false);
        }
    }

    return (
        <div className="h-screen">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                        <Card className="w-96">
                            <CardHeader>
                                <CardTitle className="text-2xl text-center">
                                    {t('loginCard.login')}
                                </CardTitle>
                                {error && <p className="text-destructive dark:text-red-600 text-center">
                                    {t('loginCard.loginError')}
                                </p>}
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="grid">
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="email@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="grid">
                                            <FormLabel>{t('loginCard.password')}</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                            <CardFooter>
                                <Button disabled={loading} type="submit" className="w-full">
                                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    {t('loginCard.btn')}
                                </Button>
                            </CardFooter>
                        </Card>
                    </form>
                </Form>
            </div>
        </div>
    )
}

