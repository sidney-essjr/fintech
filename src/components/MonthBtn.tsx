function getMonthName(decreaseMonth: number) {
  const date = new Date();
  date.setDate(date.getMonth() + decreaseMonth);
  const monthName = Intl.DateTimeFormat("en", { month: "long" }).format(date);
  return monthName;
}

export default function MonthBtn({ decreaseMonth }: { decreaseMonth: number }) {
  return <button>{getMonthName(decreaseMonth)}</button>;
}
