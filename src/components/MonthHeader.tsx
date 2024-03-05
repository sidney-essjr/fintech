import MonthBtn from "./MonthBtn";

export default function MonthHeader() {
  return (
    <div className="flex">
      <MonthBtn decreaseMonth={-3} />
      <MonthBtn decreaseMonth={-2} />
      <MonthBtn decreaseMonth={-1} />
      <MonthBtn decreaseMonth={0} />
    </div>
  );
}
