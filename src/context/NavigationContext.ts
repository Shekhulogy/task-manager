import { createContext } from "react";

type ContextType = {
    isActive: string,
    setIsActive: React.Dispatch<React.SetStateAction<string>>
}

export const NavigationContext = createContext<ContextType>({} as ContextType)