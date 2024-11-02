'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Mail, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual password reset logic
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulating API call
      setIsSubmitted(true);
      toast({
        title: "Success",
        description: "If an account exists with this email, you will receive password reset instructions.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send reset instructions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600">
      <Card className="w-full max-w-md p-8 space-y-6 bg-background/95 backdrop-blur-sm shadow-xl">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter">Reset Password</h1>
          <p className="text-muted-foreground">
            {!isSubmitted 
              ? "Enter your email address to receive password reset instructions" 
              : "Check your email for reset instructions"}
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
              disabled={isLoading}
            >
              {isLoading ? "Sending Instructions..." : "Send Reset Instructions"}
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              We've sent password reset instructions to your email address. 
              Please check your inbox and follow the instructions to reset your password.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setIsSubmitted(false)}
            >
              Try another email
            </Button>
          </div>
        )}

        <div className="text-center text-sm">
          <Link 
            href="/auth/login"
            className="text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-500 dark:hover:text-blue-400 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>
        </div>
      </Card>
    </div>
  );
}