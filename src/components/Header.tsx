import { useState } from "react";
import DataRange from "./DataRange";
import MonthHeader from "./MonthHeader";

export default function Header() {
  const [title, setTitle] = useState("Resumo")
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
