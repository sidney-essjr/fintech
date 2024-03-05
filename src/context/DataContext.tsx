import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
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
  start: string;
  setStart: Dispatch<React.SetStateAction<string>>;
  end: string;
  setEnd: Dispatch<React.SetStateAction<string>>;
};

const DataContext = createContext<IFetchData | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("The context must involve your dependents");
  return context;
};

export function setSearchDate(date: Date = new Date(), daysAgo: number) {
  date.setDate(date.getDate() - daysAgo);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [start, setStart] = useState(setSearchDate(undefined, 7));
  const [end, setEnd] = useState(setSearchDate(undefined, 0));
  const url = `https://data.origamid.dev/vendas/?inicio=${start}final=${end}`;

  const { data, loading, error } = useFetch<Data>(url);

  const context = (
    <DataContext.Provider
      value={{ data, error, loading, start, setStart, end, setEnd }}
    >
      {children}
    </DataContext.Provider>
  );

  return context;
};
