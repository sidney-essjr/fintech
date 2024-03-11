import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { ISale } from "../context/DataContext";

const saleChart = {
  data: [
    {
      data: "2024/01/01",
      pago: 200,
      processando: 30,
      recebido: 250,
    },
    {
      data: "2024/01/02",
      pago: 190,
      processando: 20,
      recebido: 230,
    },
    {
      data: "2024/01/03",
      pago: 230,
      processando: 32,
      recebido: 270,
    },
    {
      data: "2024/01/04",
      pago: 120,
      processando: 22,
      recebido: 200,
    }
  ]
};

export default function SalesChart({ data }: { data: ISale[] }) {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        data={saleChart.data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="data" />
        <Tooltip />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={2}/>
        <Line type="monotone" dataKey="processando" stroke="#387908" strokeWidth={2}/>
        <Line type="monotone" dataKey="recebido" stroke="#000000" strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
  );
}
