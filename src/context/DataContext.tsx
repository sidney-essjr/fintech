import { Dispatch, PropsWithChildren, createContext, useState } from "react";
import useFetch, { FetchState } from "../hooks/useFetch";

type Data = {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: "boleto" | "pix" | "cartao";
  parcelas: number | null;
  data: string;
};

type IFetchData = FetchState<Data> & {
  setUrl: Dispatch<React.SetStateAction<string>>;
};

const DataContext = createContext<IFetchData | null>(null);

const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [url, setUrl] = useState("https://data.origamid.dev/vendas/");

  const { data, loading, error } = useFetch<Data>(url);

  const context = (
    <DataContext.Provider value={{ data, error, loading, setUrl }}>
      {children}
    </DataContext.Provider>
  );

  return context;
};
