'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Globe, History } from 'lucide-react';
import { DashboardStats } from '@/components/dashboard/stats';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { UploadZone } from '@/components/dashboard/upload-zone';

export default function Dashboard() {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent)] dark:bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 py-8 relative">
        <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
          Dashboard
        </h1>
        
        {/* Stats Overview */}
        <DashboardStats />

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Cards with enhanced gradients */}
          <Card className="p-6 backdrop-blur-sm bg-background/80 border-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
            <div className="relative">
              <Upload className="w-8 h-8 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Upload PDF or PPT files to generate Q&As
              </p>
              <UploadZone />
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-background/80 border-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
            <div className="relative">
              <FileText className="w-8 h-8 mb-4 text-purple-500" />
              <h3 className="text-lg font-semibold mb-2">Text Input</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Enter or paste text to generate Q&As
              </p>
              <Button className="w-full">Start Text Analysis</Button>
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-background/80 border-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
            <div className="relative">
              <Globe className="w-8 h-8 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-2">Web Scraping</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Enter a URL to generate Q&As from web content
              </p>
              <Button className="w-full">Start Web Scraping</Button>
            </div>
          </Card>
        </div>

        {/* Recent Activity with gradient */}
        <Card className="p-6 backdrop-blur-sm bg-background/80 border-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
          <div className="relative">
            <RecentActivity />
          </div>
        </Card>
      </div>
    </div>
  );
}