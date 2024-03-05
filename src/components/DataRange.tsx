import { useState } from "react";
import DataInput from "./wrappers/DataInput";

export default function DataRange() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DataInput
        id="start"
        name="start"
        label="Start"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DataInput
        id="end"
        name="end"
        label="End"
        value={end}
        onChange={({ target }) => setEnd(target.value)}
      />
    </form>
  );
}
