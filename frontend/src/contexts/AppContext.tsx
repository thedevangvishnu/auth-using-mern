import { ReactNode, createContext, useContext } from "react";

type AppContextType = {
  isLoggedIn: boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppContext.Provider
      value={{
        isLoggedIn: true,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
