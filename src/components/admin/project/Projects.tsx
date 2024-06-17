import { Project } from "@/models/Project";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectTable } from "./ProjectTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons";

export function Projects(){
    const { t } = useTranslation();

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL+"/projects")
        .then((res) => res.json())
        .then((projects) => {
          setProjects(projects.data);
          setLoading(false);
        })
    }, [])

    if (loading) return

    return (
        <section className="flex flex-col min-h-screen">

            <div className="flex items-center justify-between">
                <h2 className="w-full text-center text-3xl font-bold my-10">
                    {t("projets")}
                </h2>

                <a href="/admin/projets/create">
                    <Button>
                        {t("projectTable.createProject")}
                        <Icons.add className="ml-2 h-4 w-4" />
                    </Button>
                </a>
                
            </div>

            <Card>
                <CardContent className="pt-6">
                    <ProjectTable projects={projects} />
                </CardContent>
            </Card>
                
        </section>
    )

}