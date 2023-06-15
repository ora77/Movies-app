import React from "react";
import { usePromptContext } from "../../../context/PromptContext";


export const Prompt = () => {
    const { showPrompt, setShowPrompt} = usePromptContext();
    if(showPrompt === false) return null;
    return <div>{prompt()}</div>
}