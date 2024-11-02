'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUploader } from '@/components/dashboard/file-uploader';
import { TextAnalyzer } from '@/components/dashboard/text-analyzer';
import { UrlAnalyzer } from '@/components/dashboard/url-analyzer';

export default function Generate() {
  const [selectedTab, setSelectedTab] = useState('upload');

  return (
    <div className="min-h-screen relative">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent)] dark:bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 py-8 relative">
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
          Generate Questions
        </h1>
        <Card className="p-6 backdrop-blur-sm bg-background/80 border-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
          
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="relative">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10">
              <TabsTrigger 
                value="upload"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:via-purple-500/20 data-[state=active]:to-blue-500/20"
              >
                File Upload
              </TabsTrigger>
              <TabsTrigger 
                value="text"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:via-purple-500/20 data-[state=active]:to-blue-500/20"
              >
                Text Input
              </TabsTrigger>
              <TabsTrigger 
                value="url"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:via-purple-500/20 data-[state=active]:to-blue-500/20"
              >
                URL Data
              </TabsTrigger>
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
    </div>
  );
}