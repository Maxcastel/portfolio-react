import { useEditor } from "@/hooks/useEditor";
import { Value } from "@udecode/plate-common";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ShowProject(){
    const { url } = useParams();
    const [_, setContentJson, contentHtml] = useEditor();
    const [loading, setLoading] = useState<boolean>(true);
    

    useEffect(() => {
        fetch(`/api/projects/${url}`)
        .then((res) => res.json())
        .then((project) => {
            setContentJson(JSON.parse(project.data.content) as Value);
            setLoading(false);
        })
    }, [])

    if (loading) return 

    return (
        <div className="mt-4 min-h-[calc(100vh-(24px+32px))] pb-[5vh]">
            {contentHtml}
        </div>
    )
}