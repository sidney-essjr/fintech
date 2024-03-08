import { ISale } from "../context/DataContext";

export default function SaleItem({ sale }: { sale: ISale }) {
  return (
    <div className="venda box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {sale.id}
      </a>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
}
