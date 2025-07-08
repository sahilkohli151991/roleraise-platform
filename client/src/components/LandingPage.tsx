import Navigation from './Navigation';
import Hero from './Hero';
import SocialProof from './SocialProof';
import HowItWorks from './HowItWorks';
import CareerTransformation from './CareerTransformation';
import Testimonials from './Testimonials';
import Mentors from './Mentors';
import CareerTracks from './CareerTracks';
import FAQ from './FAQ';
import Guarantee from './Guarantee';
import WhyNotCourses from './WhyNotCourses';
import Pricing from './Pricing';
import BookCall from './BookCall';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SocialProof />
      <WhyNotCourses />
      <HowItWorks />
      <Testimonials />
      <CareerTransformation />
      <Mentors />
      <Pricing />
      <Guarantee />
      <FAQ />
      <CareerTracks />
      <BookCall />
      <Footer />
    </div>
  );
}
