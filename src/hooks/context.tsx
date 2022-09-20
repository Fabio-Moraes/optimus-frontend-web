import { createContext, useContext, ReactNode, useState } from 'react';

interface Repository {
  name: string;
  service: string;
  service_date: string;
  service_time: string;
  phone: string;
  identifier: string;
  employee: string;
}

type StateContext = {
  loadingList: Repository[];
  setLoadingList: (value: Repository[]) => void;

  loginAccount: { user: string, password: string, business: string };
  setLoginAccount: (value: { user: string, password: string, business: string }) => void;

  search: string;
  setSearch: (value: string) => void;
};

type ProviderProps = {
  children: ReactNode;
};

export const Context = createContext({} as StateContext);

const Provider = ({ children }: ProviderProps) => {
  const [loadingList, setLoadingList] = useState<Repository[]>([]);
  const [loginAccount, setLoginAccount] = useState({ user: '', password: '', business: '' });
  const [search, setSearch] = useState('');

  return (
    <Context.Provider
      value={
        {
          search,
          setSearch,

          loadingList,
          setLoadingList,

          loginAccount,
          setLoginAccount,
        } as StateContext
      }
    >
      {children}
    </Context.Provider>
  );
};

function useContexState() {
  const context = useContext(Context);
  return context;
}

export { Provider, useContexState };
