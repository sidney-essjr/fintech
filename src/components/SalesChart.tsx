import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ISale } from "../context/DataContext";

type DataChart = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function tranformData(data: ISale[]): DataChart[] {
  const dataChart = data.reduce((acc: { [key: string]: DataChart }, item) => {
    const day = item.data.split(" ")[0];
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    acc[day][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dataChart).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }));
}

export default function SalesChart({ data }: { data: ISale[] }) {
  const tranformedData = tranformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        data={tranformedData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="data" />
        <YAxis/>
        <Legend />
        <Tooltip />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={2} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#387908"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
