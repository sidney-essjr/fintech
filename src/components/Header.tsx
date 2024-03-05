import DataRange from "./DataRange";
import MonthHeader from "./MonthHeader";

export default function Header() {
  return (
    <header className="mb">
      <div className="mb">
        <DataRange />
      </div>
      <MonthHeader />
    </header>
  );
}
