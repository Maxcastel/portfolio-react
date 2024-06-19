import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next";
import { Project } from "@/models/Project";
import { Button } from "@/components/ui/button";
import { Language } from "@/models/Language";

type shortNameInLower = "php" | "js" | "ts" | "java"

export function ProjectCard({project}:{project:Project}){
    const { t } = useTranslation();

    function formatDate(dateString:string) {
        const date = new Date(dateString);
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const year = date.getFullYear();

        return `${day}/${year}`;
    }

    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="pb-3">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                    {t(project.type.name.toLowerCase())} {formatDate(project.date)}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-3.5">
                <p className="break-words">{project.description}</p>
                <div className="flex">
                    <img className="rounded-lg w-full h-[240px] object-cover" src={project.thumbnail}  />
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <Button asChild>
                    <a href={`/projets/${project.url}`}>
                        {t('project.btn.voir')}
                    </a>
                </Button>
                <div className="flex flex-wrap gap-2">
                    {project.languages.map((language:Language) => (
                        <Badge key={language.shortName} className="px-3 py-1" variant={language.shortName.toLowerCase() as shortNameInLower}>
                            {language.shortName}
                        </Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}