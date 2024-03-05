import { useData } from "../context/DataContext";
import DataInput from "./wrappers/DataInput";

export default function DataRange() {
  const { start, end, setStart, setEnd } = useData();
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DataInput
        id="start"
        name="start"
        label="Start"
        type="date"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DataInput
        id="end"
        name="end"
        label="End"
        type="date"
        value={end}
        onChange={({ target }) => setEnd(target.value)}
      />
    </form>
  );
}
