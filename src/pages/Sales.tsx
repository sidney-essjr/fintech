import SaleItem from "../components/SaleItem";
import { useData } from "../context/DataContext";

export default function Sales() {
  const { data } = useData();

  if (!data) return null;

  return (
    <section>
      <ul>
        {data.map((sale) => (
          <li key={sale.id}>
            <SaleItem sale={sale} />
          </li>
        ))}
      </ul>
    </section>
  );
}
