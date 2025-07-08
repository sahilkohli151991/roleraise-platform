import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { insertAssessmentSchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import type { InsertAssessment } from '@shared/schema';

// Calendly widget type definitions
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Hero() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertAssessment>({
    resolver: zodResolver(insertAssessmentSchema),
    defaultValues: {
      name: '',
      email: '',
      currentRole: '',
      experience: '',
      salary: '',
      targetSalary: '',
    },
  });

  const assessmentMutation = useMutation({
    mutationFn: async (data: InsertAssessment) => {
      const response = await apiRequest('POST', '/api/assessment', data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Assessment submitted successfully!",
        description: "RoleRaise will be in touch within 24 hours to discuss your career goals.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/assessment'] });
    },
    onError: (error) => {
      console.error('Assessment submission failed:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertAssessment) => {
    assessmentMutation.mutate(data);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-32 gradient-hero relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="section-badge mb-8">
              ⚡ 500+ Tech Professionals Placed in 2024
            </div>
            
            <h1 className="heading-1 mb-6">
              Accelerate Your Career to $200K+ Tech Roles
            </h1>
            
            <p className="body-text-large mb-6 text-gray-700">
              Skip the endless job applications. Get direct access to exclusive $200K+ opportunities at leading technology companies through our proven referral network.
            </p>
            
            <p className="body-text mb-10 text-gray-600">
              <strong className="text-emerald-600 font-semibold">Not another course or bootcamp.</strong> We're your strategic career partners with a data-driven 90-day transformation system.
            </p>
            
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 mb-12 border border-gray-100 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 mb-4 border border-emerald-100 group-hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl font-black text-emerald-700 mb-2">92%</div>
                    <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Success Rate</div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">Of clients receive job offers within 90 days</p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-4 border border-blue-100 group-hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl font-black text-blue-700 mb-2">$34K</div>
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Avg. Salary Increase</div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">Average salary boost for successful candidates</p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 mb-4 border border-purple-100 group-hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl font-black text-purple-700 mb-2">6 Weeks</div>
                    <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Time to Offer</div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">Average time from start to job offer</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                onClick={() => {
                  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/kohlisahil151991';
                  if (calendlyUrl && !calendlyUrl.includes('your-username')) {
                    // Open Calendly in a popup
                    if (window.Calendly) {
                      window.Calendly.initPopupWidget({ url: calendlyUrl });
                    } else {
                      // Fallback to scrolling to embedded widget
                      scrollToSection('book-call');
                    }
                  } else {
                    scrollToSection('book-call');
                  }
                }}
                className="btn-primary px-12 py-6 text-xl font-black rounded-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">🚀 SCHEDULE CALL WITH ROLERAISE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('testimonials')}
                className="px-8 py-6 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-2xl transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
              >
                📊 See $200K+ Success Stories
              </Button>
            </div>
            
            {/* Enhanced Urgency Banner */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 mb-12 text-center shadow-sm">
              <div className="flex items-center justify-center mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <div className="text-red-700 font-semibold text-sm uppercase tracking-wide">Limited Availability</div>
              </div>
              <div className="text-gray-800 font-bold text-lg mb-1">Only 7 Strategy Calls Left This Week</div>
              <div className="text-gray-600 text-sm">Join 500+ professionals who secured $200K+ roles in 2024</div>
            </div>
            
            <div className="flex flex-wrap gap-8 text-sm text-gray-700 font-semibold">
              <div className="flex items-center status-indicator status-success">
                <span className="text-green-500 mr-2">✓</span>
                No upfront payment
              </div>
              <div className="flex items-center status-indicator status-success">
                <span className="text-green-500 mr-2">✓</span>
                90-day guarantee
              </div>
              <div className="flex items-center status-indicator status-success">
                <span className="text-green-500 mr-2">✓</span>
                FAANG mentors
              </div>
            </div>
          </div>
          
          <div>
            <Card className="glass-effect rounded-3xl border-2 border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-black text-gray-900 mb-2">
                  {isSubmitted ? 'Thank You!' : 'FREE $200K+ Career Assessment'}
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {isSubmitted ? 'We\'ll be in touch within 24 hours' : 'See exactly how to land your dream role in 90 days'}
                </CardDescription>
                {!isSubmitted && (
                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <p className="text-gray-600 font-medium text-sm">Only 10 Strategy Calls Left This Month</p>
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                {isSubmitted ? (
                  <div className="text-center py-8 success-animation">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <p className="text-xl font-bold text-gray-900 mb-3">Assessment Submitted Successfully!</p>
                    <p className="text-gray-600 text-lg leading-relaxed">Our team will review your information and contact you within 24 hours to discuss your career goals.</p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-bold">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} className="premium-input" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-bold">Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} className="premium-input" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="currentRole"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-bold">Current Role</FormLabel>
                            <FormControl>
                              <Input placeholder="Software Engineer" {...field} className="premium-input" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-bold">Years of Experience</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="premium-input">
                                  <SelectValue placeholder="Select experience level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-2">1-2 years</SelectItem>
                                <SelectItem value="3-5">3-5 years</SelectItem>
                                <SelectItem value="6-10">6-10 years</SelectItem>
                                <SelectItem value="10+">10+ years</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="salary"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-bold">Current Salary</FormLabel>
                              <FormControl>
                                <Input placeholder="$120,000" {...field} className="premium-input" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="targetSalary"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-bold">Target Salary</FormLabel>
                              <FormControl>
                                <Input placeholder="$200,000" {...field} className="premium-input" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="btn-primary w-full py-6 text-xl font-black rounded-2xl relative overflow-hidden group"
                        disabled={assessmentMutation.isPending}
                      >
                        <span className="relative z-10">
                          {assessmentMutation.isPending ? 'SUBMITTING...' : 'GET MY FREE $200K+ ROADMAP'}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Button>
                      <p className="text-center text-xs text-gray-500 mt-3">
                        🔒 Your information is 100% secure. We never share your data.
                      </p>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}