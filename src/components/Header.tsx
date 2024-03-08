import { useEffect, useState } from "react";
import DataRange from "./DataRange";
import MonthHeader from "./MonthHeader";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="datarange mb">
        <DataRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <MonthHeader />
    </header>
  );
}
