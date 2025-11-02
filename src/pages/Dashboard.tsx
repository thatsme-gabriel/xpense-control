import React, { type FC } from "react";
import MonthlyLineCharts from "@/components/charts/MonthlyLineChart";
import CategoryPieChart from "@/components/charts/CategoryPieChart";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Car } from "lucide-react";




const Dashboard: FC<any> = () => {



    //#region 
    const dataLine = [
        {
            name: 'Janeiro',
            uv: 400,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feveiro',
            uv: 300,
            pv: 4567,
            amt: 2400,
        },
        {
            name: 'Março',
            uv: 320,
            pv: 1398,
            amt: 2400,
        },
        {
            name: 'Abril',
            uv: 200,
            pv: 9800,
            amt: 2400,
        },
        {
            name: 'Maio',
            uv: 278,
            pv: 3908,
            amt: 2400,
        },
        {
            name: 'Junho',
            uv: 189,
            pv: 4800,
            amt: 2400,
        },
        {
            name: 'Julho',
            uv: 189,
            pv: 4800,
            amt: 2400,
        },
        {
            name: 'Agosto',
            uv: 189,
            pv: 4800,
            amt: 2400,
        },
        {
            name: 'Setembro',
            uv: 189,
            pv: 4800,
            amt: 2400,
        },
        {
            name: 'Outubro',
            uv: 189,
            pv: 4800,
            amt: 2400,
        },
        {
            name: 'Novembro',
            uv: 189,
            pv: 4800,
            amt: 2400,
        },
        {
            name: 'Dezembro',
            uv: 189,
            pv: 4800,
            amt: 2400,
        },

    ];

     const dataPie = [
        { name: 'Alimentação', uv: 400 },
        { name: 'Transporte', uv: 300 },
        { name: 'Lazer', uv: 200 },
        { name: 'Educação', uv: 100 },
    ];

    //#endregion

   


    return (
        <view className="justify-around">

            <div className="m-1">
                <Card>
                    <CategoryPieChart data={dataPie} />
                </Card>

            </div>

            <div className="m-1">
                <Card>
                    <MonthlyLineCharts data={dataLine} />
                </Card>
            </div>
        </view>
    )
}

export default Dashboard;