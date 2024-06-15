import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useEditor } from "@/hooks/useEditor";
import { Project } from "@/models/Project";
import { Value } from "@udecode/plate-common";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ShowProjectAdmin(){
    const { id } = useParams();
    const [_, setContentJson, contentHtml] = useEditor();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("/api/projects")
        .then((res) => res.json())
        .then((projects) => {
            const project = projects.data.find((project:Project) => project.id === Number(id)) as Project;

            setContentJson(JSON.parse(project.content) as Value);

            setLoading(false);
        })
    }, [])

    if (loading) return 

    return (<>
        <div className="flex justify-end mt-4">
           <a href={`/admin/projets/edit/${id}`}>
                <Button>
                    <Icons.editing className="mr-2 h-4 w-4" />
                    Editer
                </Button>
            </a>
        </div>
        {contentHtml}
    </>)
}