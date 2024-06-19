import { useEditor } from "@/hooks/useEditor";
import { Value } from "@udecode/plate-common";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ShowProject(){
    const { url } = useParams();
    const [_, setContentJson, contentHtml] = useEditor();
    const [loading, setLoading] = useState<boolean>(true);
    

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/projects/${url}`)
        .then((res) => res.json())
        .then((project) => {
            setContentJson(JSON.parse(project.data.content) as Value);
            setLoading(false);
        })
    }, [])

    if (loading) return <div className="lg:min-h-[calc(100vh-(40px+32px))] min-h-[calc(100vh-(24px+32px))]"></div>

    return (
        <div className="mt-8 lg:min-h-[calc(100vh-(40px+32px+2rem))] min-h-[calc(100vh-(24px+32px+2rem))] pb-[5vh]">
            {contentHtml}
        </div>
    )
}