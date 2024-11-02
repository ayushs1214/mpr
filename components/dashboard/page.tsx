'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUploader } from '@/components/dashboard/file-uploader';
import { TextAnalyzer } from '@/components/dashboard/text-analyzer';
import { UrlAnalyzer } from '@/components/dashboard/url-analyzer';
import { DashboardStats } from '@/components/dashboard/stats';
import { ActivityFeed } from '@/components/dashboard/activity-feed';
import { UsageChart } from '@/components/dashboard/usage-chart';

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('upload');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8">
        {/* Analytics Overview */}
        <DashboardStats />

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Input Section */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="upload">File Upload</TabsTrigger>
                  <TabsTrigger value="text">Text Input</TabsTrigger>
                  <TabsTrigger value="url">URL Input</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upload">
                  <FileUploader />
                </TabsContent>
                
                <TabsContent value="text">
                  <TextAnalyzer />
                </TabsContent>
                
                <TabsContent value="url">
                  <UrlAnalyzer />
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Activity Feed */}
          <div className="space-y-8">
            <ActivityFeed />
            <UsageChart />
          </div>
        </div>
      </div>
    </div>
  );
}