import { ReactNode, createContext, useContext } from "react";
import { useQuery } from "react-query";
import * as request from "../request";
import LoadingSpinner from "../components/LoadingSpinner";

type ShowToastType = {
  type: "SUCCESS" | "ERRRO";
  message: string;
};

type AppContextType = {
  isLoggedIn: boolean;
  showToast: (message: ShowToastType) => void;
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
        showToast: (message) => {
          console.log(message);
        },
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
