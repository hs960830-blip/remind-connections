import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                고객을 <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">기억하는 사람</span>이 결국 신뢰를 얻어요.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                첫 만남, 직전 대화, 호불호까지 한 곳에 정리해 두고, 다음 만남 전에 10초만 훑어보세요.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg transition-all"
              onClick={() => scrollToSection("service-preview")}
            >
              화면 예시 바로 보기
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <div className="relative bg-card rounded-2xl shadow-[var(--card-shadow)] p-6 border border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <input 
                    type="text" 
                    placeholder="이름으로 검색하기" 
                    className="bg-muted/50 px-4 py-2 rounded-lg flex-1 mr-4 text-sm"
                    disabled
                  />
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">전체</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">김지은</h3>
                        <p className="text-sm text-muted-foreground">네일 단골 고객</p>
                      </div>
                      <span className="text-xs text-muted-foreground">2025.11.10</span>
                    </div>
                    <div className="flex gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">#파스텔톤</span>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">#손얇음</span>
                    </div>
                    <p className="text-sm text-muted-foreground">다음엔 겨울 느낌의 컬러 추천해달라 하심</p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">박현우</h3>
                        <p className="text-sm text-muted-foreground">B사 팀장 (영업 대상)</p>
                      </div>
                      <span className="text-xs text-muted-foreground">2025.11.03</span>
                    </div>
                    <div className="flex gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">#커피좋아함</span>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">#아이셋아빠</span>
                    </div>
                    <p className="text-sm text-muted-foreground">아이 야구 이야기 꺼냈을 때 분위기 풀어졌음</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
