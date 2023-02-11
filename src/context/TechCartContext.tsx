import { createContext, useContext, ReactNode } from "react";

type TechCartProviderProps = {
  children: ReactNode;
};

const TechCartContext = createContext({});

export function useTechCart() {
  return useContext(TechCartContext);
}

export function TechCartProvider({ children }: TechCartProviderProps) {
  return (
    <TechCartContext.Provider value={{}}>{children}</TechCartContext.Provider>
  );
}
