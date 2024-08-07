import { ProjectEditor } from "./ProjectEditor";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useEditor } from "@/hooks/useEditor";
import { Value } from "@udecode/plate-common";
import MultiSelectFormField from "@/components/ui/multi-select-combobox";
import { frameworksList } from "@/data/frameworks";
import { languagesList } from "@/data/languages";
import { typeList } from "@/data/types";
import { categoryList } from "@/data/categories";
import { Toaster } from "@/components/ui/sonner";
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/plate-ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@udecode/cn";
import { toast } from "sonner";
import { classeList } from "@/data/classes";
import { Loader2 } from "lucide-react"
import slugify from 'react-slugify';
import { useEffect, useState } from "react";
import { Project } from "@/models/Project";
import { useParams } from "react-router-dom";

export function EditProject() {
    const { t } = useTranslation();
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [isProjectLoaded, setIsProjectLoaded] = useState<boolean>(false);
    const [project, setProject] = useState<Project|undefined>();
    const [contentJson, setContentJson, contentHtml] = useEditor();
      
    const formSchema = z.object({
        title: z
            .string()
            .min(1, {message: t('projectEditor.empty.title')})
            .min(5, {message: t('projectEditor.error.title')}),
        description: z
            .string()
            .min(1, {message: t('projectEditor.empty.description')})
            .min(5, {message: t('projectEditor.error.description')}),
        miniature: z
            .string({required_error: t('projectEditor.empty.miniature')})
            .url({message: t('projectEditor.error.url')}),
        content: z
            .string({required_error: t('projectEditor.empty.content')})
            .min(10, {message: t('projectEditor.empty.content')}),
        frameworks: z
            .array(z.string()),
        languages: z
            .array(z.string().min(1))
            .min(1, {message: t('projectEditor.empty.languages')}),
        type: z
            .array(z.string().min(1))
            .min(1, {message: t('projectEditor.empty.type')})
            .max(1, {message: t('projectEditor.error.type')}),
        category: z
            .array(z.string().min(1))
            .min(1, {message: t('projectEditor.empty.category')})
            .max(1, {message: t('projectEditor.error.category')}),
        classe: z
            .array(z.string())
            .max(1, {message: t('projectEditor.error.classe')}),
        url: z
            .union([
                z.string().url({message: t('projectEditor.error.url')}), 
                z.literal("")
            ]),
        github: z
            .union([
                z.string().url({message: t('projectEditor.error.url')}), 
                z.literal("")
            ]),
        date: z
            .date({required_error: t('projectEditor.empty.date')}),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          description: "",
          miniature: "",
          frameworks: [],
          languages: [],
          type: [],
          category: [],
          classe: [],
          url: "",
          github: "",
          date: undefined
        },
    })

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL+"/projects")
        .then((res) => res.json())
        .then((projects) => {
            const project = projects.data.find((project:Project) => project.id === Number(id)) as Project;
            
            setContentJson(JSON.parse(project.content) as Value);
            setProject(project);

            form.setValue("title", project.title);
            form.setValue('description', project.description);
            form.setValue('miniature', project.thumbnail);
            form.setValue('frameworks', project.frameworks.map(framework => framework.name.toLowerCase()));
            form.setValue('languages', project.languages.map(language => language.name.toLowerCase()));
            form.setValue('type', [project.type.name.toLowerCase()]);
            form.setValue('category', [project.category.name.toLowerCase()]);
            form.setValue('classe', project.classe ? [project.classe.name] : []);
            form.setValue('url', project.link ?? "");
            form.setValue('github', project.github ?? "");
            form.setValue('date', new Date(project.date));

            setIsProjectLoaded(true);
        })
    }, [])

    if (!isProjectLoaded) return

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log("data",data)
        setLoading(true);

        fetch(`${import.meta.env.VITE_API_URL}/projects/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: data.title,
                url: slugify(data.title),
                description: data.description,
                thumbnail: data.miniature,
                content: data.content,
                link: data.url === "" ? null : data.url,
                github: data.github === "" ? null : data.github,
                date: data.date,
                frameworks_name: data.frameworks,
                languages_name: data.languages,
                type_name: data.type[0],
                category_name: data.category[0],
                classe_name: data.classe.length === 0 ? null : data.classe[0],
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setLoading(false);

            if (response.status === 200) {
                toast.success(t('projectEditor.edit.toast.success.title'));
            }
            else {
                toast.error(t('projectEditor.edit.toast.error.title'))
            }
        })
    }

    return (
        <div className="py-8">
            <h1 className="text-2xl font-semibold text-center mb-8">
                {t('projectEditor.edit.h1')+" "+project?.title}
            </h1>

            <Toaster />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                    <div className="grid gap-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel className="text-base">{t('projectEditor.title')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('projectEditor.placeholder.title')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel className="text-base">{t('projectEditor.description')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('projectEditor.placeholder.description')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="miniature"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel className="text-base">{t('projectEditor.miniature')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('projectEditor.placeholder.miniature')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid">
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem className="grid">
                                        <FormLabel className="font-medium text-base">
                                            {t('projectEditor.content')}
                                        </FormLabel>
                                        <FormControl>
                                            <ProjectEditor
                                                initialValue={JSON.parse(contentJson)}
                                                onWrite={(newJson:Value) => setContentJson(newJson)}
                                                onValueChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <div className='mt-8'>
                                <p className='font-medium text-base mb-6'>{t('projectEditor.json')}</p>
                                <code className='text-base'>
                                    {contentJson}
                                </code>
                            </div>
                            <div className='mt-8'>
                                <p className='font-medium text-base mb-6'>{t('projectEditor.preview')}</p>
                                <div className='border border-primary w-full px-[50px] py-16'>
                                    {contentHtml}
                                </div>
                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="frameworks"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel className="font-medium text-base">
                                        {t('projectEditor.frameworks')}
                                    </FormLabel>
                                    <FormControl>
                                        <MultiSelectFormField
                                            options={frameworksList}
                                            defaultValue={field.value}
                                            onValueChange={field.onChange}
                                            placeholder={t('projectEditor.multiselect.frameworks')}
                                            variant="inverted"
                                            animation={0}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="languages"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel className="font-medium text-base">
                                        {t('projectEditor.languages')}
                                    </FormLabel>
                                    <FormControl>
                                        <MultiSelectFormField
                                            options={languagesList}
                                            defaultValue={field.value}
                                            onValueChange={field.onChange}
                                            placeholder={t('projectEditor.multiselect.languages')}
                                            variant="inverted"
                                            animation={0}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel className="font-medium text-base">
                                        {t('projectEditor.type')}
                                    </FormLabel>
                                    <FormControl>
                                        <MultiSelectFormField
                                            options={typeList}
                                            defaultValue={field.value}
                                            onValueChange={field.onChange}
                                            placeholder={t('projectEditor.multiselect.type')}
                                            variant="inverted"
                                            animation={0}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel className="font-medium text-base">
                                        {t('projectEditor.category')}
                                    </FormLabel>
                                    <FormControl>
                                        <MultiSelectFormField
                                            options={categoryList}
                                            defaultValue={field.value}
                                            onValueChange={field.onChange}
                                            placeholder={t('projectEditor.multiselect.category')}
                                            variant="inverted"
                                            animation={0}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="classe"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel className="font-medium text-base">
                                        {t('projectEditor.classe')}
                                    </FormLabel>
                                    <FormControl>
                                        <MultiSelectFormField
                                            options={classeList}
                                            defaultValue={field.value}
                                            onValueChange={field.onChange}
                                            placeholder={t('projectEditor.multiselect.classe')}
                                            variant="inverted"
                                            animation={0}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="url"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel className="text-base">{t('projectEditor.url')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('projectEditor.placeholder.url')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="github"
                            render={({ field }) => (
                                <FormItem className="grid">
                                    <FormLabel className="text-base">{t('projectEditor.github')}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t('projectEditor.placeholder.github')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>{t('projectEditor.date')}</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                            >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>{t('projectEditor.placeholder.date')}</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div>
                            <Button disabled={loading} type="submit">
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {t('projectEditor.edit.btn')}
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}