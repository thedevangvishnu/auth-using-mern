import { ReactNode, createContext, useContext } from "react";
import { useQuery } from "react-query";
import * as request from "../request";

type AppContextType = {
  isLoggedIn: boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { isError, isLoading } = useQuery(
    "validateToken",
    request.validateToken,
    {
      retry: false,
    }
  );

  return (
    <AppContext.Provider
      value={{
        isLoggedIn: !isError,
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
