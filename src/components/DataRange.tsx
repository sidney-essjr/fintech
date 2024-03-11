import { useData } from "../context/DataContext";
import DataInput from "./wrappers/DataInput";

export default function DataRange() {
  const { start, end, setStart, setEnd } = useData();
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DataInput
        id="inicio"
        name="inicio"
        label="Inicio"
        type="date"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DataInput
        id="fim"
        name="fim"
        label="Fim"
        type="date"
        value={end}
        onChange={({ target }) => setEnd(target.value)}
      />
    </form>
  );
}
