'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Lock } from 'lucide-react';

export default function Profile() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ... rest of the handleSubmit logic remains the same
  };

  return (
    <div className="min-h-screen relative">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent)] dark:bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 py-8 relative">
        <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
          Profile Settings
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 backdrop-blur-sm bg-background/80 border-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
            <div className="relative">
              <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
              {/* Rest of the personal information form remains the same */}
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-background/80 border-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
            <div className="relative">
              <h2 className="text-xl font-semibold mb-6">Change Password</h2>
              {/* Rest of the password change form remains the same */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}