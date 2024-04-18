import { Value } from "@udecode/plate-common";
import { createElement, useEffect, useState } from "react";

export function useEditor(initialValue:Value){
    const [contentJson, setContentJson] = useState<Value>(initialValue);
    const [contentHtml, setContentHtml] = useState<any>();

    useEffect(() => {
        const element = createElement("div", null,
            contentJson.map((element) => {
                let className:string="";
                switch (element.type){
                    case "p":
                        className += " text-lg"
                        break;
                    case "h1":
                        className += " text-4xl font-bold mb-1"
                        break;
                    case "h2":
                        className += " text-2xl font-semibold mb-px"
                        break;
                    case "h3":
                        className += " text-xl font-semibold mb-px"
                        break;
                    case "h4":
                        className += " text-lg font-semibold"
                        break;
                    case "h5":
                        className += " text-lg font-semibold"
                        break;
                    case "h6":
                        className += " text-base font-semibold mb-px"
                        break;
                }

                return (
                    createElement(element.type, { className }, element.children.map((text) => {
                        let className:string="";
                        if (text.bold){ className += " font-bold" }
                        if (text.italic){ className += " italic" }
                        if (text.underline){ className += " underline" }
                        if (text.strikethrough){ className += " line-through" }

                        return (
                            createElement("span", { className }, text.text as string)
                        )
                    }))
                )
            })
        )

        setContentHtml(element)
    }, [contentJson])
    
    return [
        JSON.stringify(contentJson, null, 2), 
        setContentJson,
        contentHtml
    ] as const
}