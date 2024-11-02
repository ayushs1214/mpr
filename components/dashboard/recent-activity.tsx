'use client';

import { Card } from '@/components/ui/card';
import { FileText, Globe, AlignLeft } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      type: 'file',
      title: 'Project Documentation.pdf',
      timestamp: '2 hours ago',
      status: 'Completed',
      icon: FileText,
      questions: 15,
    },
    {
      type: 'web',
      title: 'https://example.com/article',
      timestamp: '4 hours ago',
      status: 'Completed',
      icon: Globe,
      questions: 8,
    },
    {
      type: 'text',
      title: 'Meeting Notes Analysis',
      timestamp: '6 hours ago',
      status: 'Completed',
      icon: AlignLeft,
      questions: 12,
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
          >
            <div className="flex items-center space-x-4">
              <activity.icon className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.timestamp} • {activity.questions} questions generated
                </p>
              </div>
            </div>
            <span className="text-sm font-medium text-green-500">
              {activity.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}