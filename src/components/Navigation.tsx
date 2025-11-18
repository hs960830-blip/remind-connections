import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            RE:MIND
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("service-preview")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              화면 예시
            </button>
            <Button 
              onClick={() => scrollToSection("signup")}
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/90"
            >
              관심 등록
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
