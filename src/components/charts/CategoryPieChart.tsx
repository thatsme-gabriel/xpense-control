import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { IPieChartData } from '@/interface/IPieChartData';

const CategoryPieChart =({data}: {data:IPieChartData[]})=> {

    const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];

    return (
        <div style={{ width: '100%', maxWidth: '25vw', aspectRatio: 1.618 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="uv"        
                        nameKey="name"      
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        label              
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CategoryPieChart;