import { ReactNode, createContext, useContext } from "react";
import { useQuery } from "react-query";
import * as request from "../request";
import LoadingSpinner from "../components/LoadingSpinner";

type AppContextType = {
  isLoggedIn: boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { isError, isLoading, isFetching } = useQuery(
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
      {(isLoading || isFetching) && <LoadingSpinner text="Loading..." />}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
