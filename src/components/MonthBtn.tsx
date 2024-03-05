import { CSSProperties } from "react";

const style: CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  background: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function getMonthName(decreaseMonth: number) {
  const date = new Date();
  date.setDate(date.getMonth() + decreaseMonth);
  const monthName = Intl.DateTimeFormat("en", { month: "long" }).format(date);
  return monthName;
}

export default function MonthBtn({ decreaseMonth }: { decreaseMonth: number }) {
  return <button style={style}>{getMonthName(decreaseMonth)}</button>;
}
