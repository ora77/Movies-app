import React from "react";
import { usePromptContext } from "../../../context/PromptContext";
import "./Prompt.css";

export const Prompt = () => {
  const { showPrompt, setShowPrompt } = usePromptContext();

  if (showPrompt === false) return null;

  return <div className="prompt">ghhhhhhhhhhh</div>;
};
