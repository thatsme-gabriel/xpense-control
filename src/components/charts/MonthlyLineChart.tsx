import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { ILineChartData } from '@/interface/ILineChartData';

const MonthlyLineCharts = ({ data }: { data: ILineChartData[] }) => {

    const ano = new Date().getFullYear();

    //#region 
    const renderCustomAxisTick = ({ x, y, payload }: any) => {
        let path = '';

        
        return (
            <svg x={x - 12} y={y + 5} width={24} height={24} viewBox="0 0 1024 1024" fill="#656">
                <path d={path} />
            </svg>
        );
    };

    //#endregion

    return (
        
        <div style={{ width: "100%", maxWidth: "30vw", aspectRatio: 1.618 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 5, left: 10 }}
        >
          <CartesianGrid stroke="#aaa" strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#01aaf1"
            strokeWidth={2}
            name={`Marcadores do ano de ${ano}`}
          />
          <XAxis
            dataKey="name"
            tick={renderCustomAxisTick}
            height={50}
          />
          <YAxis
            domain={[0, 10000]} 
            tickFormatter={(value) =>
              value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              })
            }
            width={80}
          />
          <Legend align="right" />
          <Tooltip
            formatter={(value: number) =>
              value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    )

}

export default MonthlyLineCharts;