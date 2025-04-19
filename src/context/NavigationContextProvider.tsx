import React, { useState } from "react";
import { NavigationContext } from "./NavigationContext";

type ContextProviderProps = {
  children: React.ReactNode;
};

export const NavigationContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isActive, setIsActive] = useState<string>("all");


  return (
    <NavigationContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </NavigationContext.Provider>
  );
};
