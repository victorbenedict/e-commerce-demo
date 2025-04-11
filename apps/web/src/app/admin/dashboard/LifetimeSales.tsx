'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/base/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@repo/ui/components/base/chart';
import { Pie, PieChart } from 'recharts';
import { totalOrders, totalSales } from './data';

const chartData = [
  { order: 'Completed:', count: 72, fill: 'var(--chart-2)' },
  { order: 'Cancelled:', count: 8, fill: 'var(--chart-1)' },
];
const chartConfig = {
  orders: {
    label: 'Orders',
  },
  chrome: {
    label: 'Orders completed',
    color: 'var(--chart-2)',
  },
  safari: {
    label: 'Orders cancelled',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function LifetimeSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lifetime Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside text-muted-foreground">
          <li className="marker:text-chart-3">{totalOrders} orders</li>
          <li className="marker:text-chart-4">
            {currencyFormatter.format(totalSales)} lifetime sale
          </li>
          <li className="marker:text-chart-2">72% of orders completed</li>
          <li className="marker:text-chart-1">8% of orders cancelled</li>
        </ul>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="count" nameKey="order" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
