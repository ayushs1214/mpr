'use client';

import { Card } from '@/components/ui/card';
import { Bar } from 'recharts';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'Mon', PDF: 4, PPT: 2, URL: 3 },
  { name: 'Tue', PDF: 3, PPT: 1, URL: 5 },
  { name: 'Wed', PDF: 6, PPT: 3, URL: 2 },
  { name: 'Thu', PDF: 2, PPT: 4, URL: 4 },
  { name: 'Fri', PDF: 5, PPT: 2, URL: 3 },
];

export function UsageChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Usage Analytics</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="PDF" fill="hsl(var(--chart-1))" />
            <Bar dataKey="PPT" fill="hsl(var(--chart-2))" />
            <Bar dataKey="URL" fill="hsl(var(--chart-3))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}