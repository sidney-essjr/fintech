import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ISale } from "../context/DataContext";
import Loading from "../components/Loading";

export default function Sale() {
  const { id } = useParams();
  const { data, loading } = useFetch<Omit<ISale, "data">>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <div>
      <ul className="box venda">
        <li>ID: {data.id}</li>
        <li>Name: {data.nome}</li>
        <li>
          Price:{" "}
          {data.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </li>
        <li>Type of Payment: {data.pagamento}</li>
        <li>Installment: {data.parcelas}</li>
        <li>Status: {data.status}</li>
      </ul>
    </div>
  );
}
