'use client';

import { format, parseISO } from 'date-fns';
import { Area, AreaChart, XAxis, YAxis } from 'recharts';
import { monthlyCount } from './data';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/base/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@repo/ui/components/base/chart';

const grouped: Record<string, number> = {};

for (const [dateStr, count] of Object.entries(monthlyCount)) {
  const key = dateStr.slice(0, 7); // '2025-04'
  grouped[key] = (grouped[key] || 0) + count;
}

const chartData = Object.entries(grouped)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([ym, count]) => ({
    month: format(parseISO(ym + '-01'), 'MMMM'),
    count,
  }));

const chartConfig = {
  count: {
    label: 'Count',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export function SaleStatistics({ ...props }) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Sale Statistics</CardTitle>
        <CardDescription>Showing total sales for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 1,
            }}
          >
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={true} axisLine={true} tickMargin={8} tickCount={5} />
            <ChartTooltip cursor={true} content={<ChartTooltipContent indicator="line" />} />
            <Area
              dataKey="count"
              type="natural"
              fill="var(--chart-2)"
              fillOpacity={0.4}
              stroke="var(--chart-2)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
