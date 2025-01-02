"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const data = [
  { month: "Jan", value: 2000 },
  { month: "Feb", value: 1800 },
  { month: "Jul", value: 3500 },
  { month: "Aug", value: 3800 },
  { month: "Jun", value: 3200 },
  { month: "May", value: 2300 },
  { month: "Apr", value: 2500 },
  { month: "Nov", value: 3000 },
  { month: "Oct", value: 2800 },
  { month: "Dec", value: 4800 },
  { month: "Mar", value: 2200 },
  { month: "Sep", value: 2500 },
];

export default function MonthlyRevenueChart() {
  // async/await

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Monthly Revenue</h1>
      <Card className="max-w-[41rem] pt-6">
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Revenue",
                color: "hsl(216, 80%, 80%)",
                formatter: (value) => `$${value.toLocaleString()}`,
              },
            }}
            className="h-[330px]"
          >
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 10,
                bottom: 5,
              }}
            >
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                fontSize={12}
                tickMargin={12}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                fontSize={12}
                tickMargin={12}
                tickFormatter={(value) => `$${value / 1000}K`}
              />
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload) {
                    const value = payload[0]?.value;
                    const maxValue = Math.max(...data.map((d) => d.value));
                    const percentage = ((value / maxValue) * 100).toFixed(1);

                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Value
                            </span>
                            <span className="font-bold">
                              ${value.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Relative
                            </span>
                            <span className="font-bold">{percentage}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="value"
                radius={[4, 4, 0, 0]}
                className="fill-[hsl(216,80%,80%)] hover:fill-[hsl(216,80%,80%)]"
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
