'use client';

import { Card } from '@/components/ui/card';
import { FileText, Users, Brain, Clock } from 'lucide-react';

export function DashboardStats() {
  const stats = [
    {
      title: 'Total Documents',
      value: '12',
      icon: FileText,
      trend: '+2 this week',
      color: 'text-blue-500',
    },
    {
      title: 'Generated Q&As',
      value: '248',
      icon: Brain,
      trend: '+45 this week',
      color: 'text-purple-500',
    },
    {
      title: 'Processing Time',
      value: '1.2s',
      icon: Clock,
      trend: 'avg. per document',
      color: 'text-green-500',
    },
    {
      title: 'Active Sessions',
      value: '3',
      icon: Users,
      trend: 'current',
      color: 'text-orange-500',
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.trend}
              </p>
            </div>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
        </Card>
      ))}
    </div>
  );
}