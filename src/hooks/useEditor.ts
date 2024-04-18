import { Value } from "@udecode/plate-common";
import { useState } from "react";

export function useEditor(initialValue:Value){
    const [contentJson, setContentJson] = useState<Value>(initialValue);

    return [
        JSON.stringify(contentJson, null, 2), 
        setContentJson,
    ] as const
}