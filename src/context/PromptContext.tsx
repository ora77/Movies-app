import React, { createContext, useContext, useEffect, useState } from "react";
import { Prompt } from "../pages/homePage/components/Prompt";


type ContextProps = {
  children: React.ReactNode;
};

type PromptContextType = {
  showPrompt: boolean;
  setShowPrompt: (boolean: boolean) => void;
};

const PromptContext = createContext<PromptContextType>(
  {} as PromptContextType
);

export const usePromptContext = () => useContext(PromptContext);

export const PromptContextProvider = ({ children }: ContextProps) => {
  const[showPrompt, setShowPrompt] = useState<boolean>(false)

  return (
    <PromptContext.Provider
      value={{
        showPrompt: showPrompt,
        setShowPrompt: setShowPrompt
      }}
    >
      {children}
      <Prompt/>
    </PromptContext.Provider>
  );
};
