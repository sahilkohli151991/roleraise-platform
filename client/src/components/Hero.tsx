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
      currentSalary: '',
      targetSalary: '',
    },
  });

  const assessmentMutation = useMutation({
    mutationFn: (data: InsertAssessment) => apiRequest('/api/assessments', 'POST', data),
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Assessment submitted successfully!",
        description: "We'll be in touch within 24 hours to discuss your career goals.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/assessments'] });
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
              ⚡ 500+ Tech Professionals Hired This Year
            </div>
            
            <h1 className="section-title">
              Land Your $200K+ Tech Role in 90 Days
            </h1>
            
            <p className="section-subtitle mb-10">
              <strong className="text-black">We are not selling any course — we're your career transformation partners.</strong>
            </p>
            
            <div className="flex flex-wrap gap-12 mb-12">
              <div className="text-left">
                <div className="text-4xl font-black text-primary mb-2">92%</div>
                <div className="text-sm text-gray-600 font-semibold">Interview Success Rate</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-black text-primary mb-2">$34K</div>
                <div className="text-sm text-gray-600 font-semibold">Avg. Negotiation Boost</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-black text-primary mb-2">6 Weeks</div>
                <div className="text-sm text-gray-600 font-semibold">Average Time to Offer</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('book-call')}
                className="btn-primary px-10 py-4 text-lg font-bold rounded-2xl"
              >
                🚀 Book Free Strategy Call
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('testimonials')}
                className="px-10 py-4 text-lg font-bold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
              >
                📊 See Success Stories
              </Button>
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
            <Card className="glass-effect rounded-3xl border-2 border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-black text-gray-900 mb-2">
                  {isSubmitted ? 'Thank You!' : 'Get Your Free Career Assessment'}
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {isSubmitted ? 'We\'ll be in touch within 24 hours' : 'Discover your path to a $200K+ tech role'}
                </CardDescription>
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
                          name="currentSalary"
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
                        className="btn-primary w-full py-6 text-xl font-bold rounded-2xl"
                        disabled={assessmentMutation.isPending}
                      >
                        {assessmentMutation.isPending ? 'Submitting...' : 'Get My Free Assessment'}
                      </Button>
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