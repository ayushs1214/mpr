import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Globe, Upload, BookOpen, Sparkles, Zap, Shield, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Enhanced Grid Pattern with better visibility in light theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)]" />
      
      {/* Enhanced gradient behind text */}
      <div className="relative">
        <div className="container mx-auto px-4 py-24">
          {/* Hero Section with enhanced gradients */}
          <section className="text-center mb-24 relative">
            {/* Enhanced localized gradient behind the text */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-blue-500/20 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative">
              <div className="floating">
                <Sparkles className="w-12 h-12 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 dark:from-blue-400 dark:via-purple-400 dark:to-violet-400 bg-300% bg-clip-text text-transparent">
                Transform Content into Knowledge
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Generate insightful questions and answers from your documents, text, and web content with GAMA.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/generate">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 hover:from-blue-700 hover:via-purple-700 hover:to-violet-700 dark:from-blue-500 dark:via-purple-500 dark:to-violet-500 text-white group px-8 py-6 text-lg relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                    Start Generating
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section with enhanced animations */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            <Card className="p-8 bg-white/80 dark:bg-gray-800/80 border-blue-100/50 dark:border-blue-500/30 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm shadow-xl dark:shadow-blue-500/10 hover:shadow-2xl hover:-translate-y-1 group">
              <Upload className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">File Processing</h3>
              <p className="text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                Upload PDFs and PPTs to automatically generate customized Q&As from your documents.
                Process multiple files simultaneously for efficient content analysis.
              </p>
            </Card>

            <Card className="p-8 bg-white/80 dark:bg-gray-800/80 border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm shadow-xl dark:shadow-purple-500/10 hover:shadow-2xl hover:-translate-y-1 group">
              <FileText className="w-12 h-12 mb-4 text-purple-600 dark:text-purple-400 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Text Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                Input text directly and let our system create comprehensive questions and answers.
                Perfect for notes, articles, and custom content.
              </p>
            </Card>

            <Card className="p-8 bg-white/80 dark:bg-gray-800/80 border-violet-100/50 dark:border-violet-500/30 hover:border-violet-200 dark:hover:border-violet-500/50 transition-all duration-500 backdrop-blur-sm shadow-xl dark:shadow-violet-500/10 hover:shadow-2xl hover:-translate-y-1 group">
              <Globe className="w-12 h-12 mb-4 text-violet-600 dark:text-violet-400 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">URL Data Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                Extract and analyze content from web pages to generate relevant Q&As.
                Automatically process online articles and resources.
              </p>
            </Card>
          </section>

          {/* Advanced Features Section with enhanced animations */}
          <section className="text-center mb-24">
            <h2 className="text-3xl font-bold mb-12 animate-text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 dark:from-blue-400 dark:via-purple-400 dark:to-violet-400 bg-300% bg-clip-text text-transparent">
              Advanced Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white/80 dark:bg-gray-800/80 border-blue-100/50 dark:border-blue-500/30 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm shadow-xl dark:shadow-blue-500/10 hover:shadow-2xl hover:-translate-y-1 group">
                <BookOpen className="w-12 h-12 mb-4 text-purple-600 dark:text-purple-400 transform group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Smart Learning</h3>
                <p className="text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  Our AI-powered system learns from your content to generate increasingly relevant and insightful questions.
                  Adaptive learning algorithms ensure high-quality results.
                </p>
              </Card>
              <Card className="p-8 bg-white/80 dark:bg-gray-800/80 border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm shadow-xl dark:shadow-purple-500/10 hover:shadow-2xl hover:-translate-y-1 group">
                <Sparkles className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Custom Generation</h3>
                <p className="text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  Control the number and complexity of generated questions.
                  Perfect for creating study materials, quizzes, and educational content.
                </p>
              </Card>
            </div>
          </section>

          {/* Why Choose GAMA Section with enhanced animations */}
          <section className="text-center mb-24">
            <h2 className="text-3xl font-bold mb-12 animate-text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 dark:from-blue-400 dark:via-purple-400 dark:to-violet-400 bg-300% bg-clip-text text-transparent">
              Why Choose GAMA
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6 bg-white/80 dark:bg-gray-800/80 border-yellow-100/50 dark:border-yellow-500/30 hover:border-yellow-200 dark:hover:border-yellow-500/50 transition-all duration-500 group backdrop-blur-sm shadow-xl dark:shadow-yellow-500/10 hover:shadow-2xl hover:-translate-y-1">
                <Zap className="w-10 h-10 mb-4 text-yellow-500 dark:text-yellow-400 mx-auto transform group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">Lightning Fast</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  Generate questions and answers in seconds with our optimized processing engine
                </p>
              </Card>

              <Card className="p-6 bg-white/80 dark:bg-gray-800/80 border-green-100/50 dark:border-green-500/30 hover:border-green-200 dark:hover:border-green-500/50 transition-all duration-500 group backdrop-blur-sm shadow-xl dark:shadow-green-500/10 hover:shadow-2xl hover:-translate-y-1">
                <Shield className="w-10 h-10 mb-4 text-green-500 dark:text-green-400 mx-auto transform group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Secure & Private</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  Your content is processed securely and never stored without your permission
                </p>
              </Card>

              <Card className="p-6 bg-white/80 dark:bg-gray-800/80 border-blue-100/50 dark:border-blue-500/30 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all duration-500 group backdrop-blur-sm shadow-xl dark:shadow-blue-500/10 hover:shadow-2xl hover:-translate-y-1">
                <Clock className="w-10 h-10 mb-4 text-blue-500 dark:text-blue-400 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Time-Saving</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  Automate the Q&A generation process and focus on what matters most
                </p>
              </Card>

              <Card className="p-6 bg-white/80 dark:bg-gray-800/80 border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-500/50 transition-all duration-500 group backdrop-blur-sm shadow-xl dark:shadow-purple-500/10 hover:shadow-2xl hover:-translate-y-1">
                <Users className="w-10 h-10 mb-4 text-purple-500 dark:text-purple-400 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">User-Friendly</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  Intuitive interface designed for both beginners and advanced users
                </p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}