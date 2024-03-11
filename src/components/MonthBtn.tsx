import { CSSProperties, Dispatch } from "react";
import { setSearchDate, useData } from "../context/DataContext";

const style: CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  background: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function getMonthAndName(decreaseMonth: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + decreaseMonth);
  const monthName = Intl.DateTimeFormat("pt-br", { month: "long" }).format(date);
  return { date, monthName };
}

function setMonth(
  date: Date,
  setStart: Dispatch<React.SetStateAction<string>>,
  setEnd: Dispatch<React.SetStateAction<string>>
) {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  setStart(setSearchDate(firstDay, 0));
  setEnd(setSearchDate(lastDay, 0));
}

export default function MonthBtn({ decreaseMonth }: { decreaseMonth: number }) {
  const { setStart, setEnd } = useData();
  const { date, monthName } = getMonthAndName(decreaseMonth);

  return (
    <button style={style} onClick={() => setMonth(date, setStart, setEnd)}>
      {monthName}
    </button>
  );
}
