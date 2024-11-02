'use client';

import { Card } from '@/components/ui/card';
import { FileText, Globe, AlignLeft, Clock } from 'lucide-react';

const activities = [
  {
    type: 'PDF',
    title: 'Research Paper.pdf',
    time: '2 minutes ago',
    questions: 15,
    icon: FileText,
  },
  {
    type: 'URL',
    title: 'Tech Article Analysis',
    time: '1 hour ago',
    questions: 8,
    icon: Globe,
  },
  {
    type: 'Text',
    title: 'Meeting Notes',
    time: '3 hours ago',
    questions: 12,
    icon: AlignLeft,
  },
];

export function ActivityFeed() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-3 rounded-lg bg-muted/50"
          >
            <activity.icon className="w-5 h-5 mt-1 text-muted-foreground" />
            <div className="flex-1 space-y-1">
              <p className="font-medium">{activity.title}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {activity.time}
              </div>
              <p className="text-sm text-muted-foreground">
                Generated {activity.questions} questions
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}