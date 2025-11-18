import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicePreview from "@/components/ServicePreview";
import BeforeAfter from "@/components/BeforeAfter";
import SignupForm from "@/components/SignupForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <ProblemSection />
        <ServicePreview />
        <BeforeAfter />
        <SignupForm />
      </div>
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 RE:MIND. 고객을 기억하는 가장 쉬운 방법.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
