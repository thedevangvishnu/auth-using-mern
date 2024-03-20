import { ReactNode, createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import * as request from "../request";
import LoadingSpinner from "../components/LoadingSpinner";
import Toast from "../components/Toast";

type ShowToastType = {
  type: "SUCCESS" | "ERROR";
  message: string;
};

type AppContextType = {
  username: string;
  isLoggedIn: boolean;
  showToast: (toast: ShowToastType) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ShowToastType | undefined>(undefined);

  const { data, isError, isLoading, isFetching } = useQuery(
    "validateToken",
    request.validateToken,
    {
      retry: false,
    }
  );

  return (
    <AppContext.Provider
      value={{
        username: data?.name,
        isLoggedIn: !isError,
        showToast: (toast) => {
          setToast(toast);
        },
      }}
    >
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(undefined)}
        />
      )}
      {(isLoading || isFetching) && <LoadingSpinner text="Loading..." />}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
