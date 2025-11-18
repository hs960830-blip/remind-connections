import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const occupationCategories = [
  "미용",
  "네일",
  "영업",
  "교육",
  "서비스",
  "의료",
  "기타"
];

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [occupationCategory, setOccupationCategory] = useState("");
  const [detailedOccupation, setDetailedOccupation] = useState("");
  const [expectations, setExpectations] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !occupationCategory || !detailedOccupation) {
      toast({
        title: "입력 확인",
        description: "이메일, 직종 대분류, 세부 직종을 모두 입력해주세요.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "이메일 형식 오류",
        description: "올바른 이메일 주소를 입력해주세요.",
        variant: "destructive"
      });
      return;
    }

    setSubmitted(true);
    toast({
      title: "관심 등록 완료!",
      description: "RE:MIND 출시 소식을 가장 먼저 알려드릴게요.",
    });
  };

  if (submitted) {
    return (
      <section id="signup" className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-card rounded-3xl border border-border shadow-[var(--card-shadow)] p-12 animate-scale-in">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">관심 가져주셔서 감사합니다 🙏</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RE:MIND가 실제 서비스로 준비될 때,<br />
              가장 먼저 소식 전해드릴게요.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">이런 도구가 있다면, 써보고 싶나요?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            RE:MIND를 실제 서비스로 만들기 전에, 정말 필요한 분들의 이야기를 먼저 듣고 싶어요.<br />
            관심 있다면, 이메일과 직종을 남겨주세요. 가장 먼저 사용해 보실 수 있도록 연락드릴게요.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-[var(--card-shadow)] p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-foreground block">
              이메일 <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="occupationCategory" className="text-sm font-semibold text-foreground block">
              직종 대분류 <span className="text-destructive">*</span>
            </label>
            <select
              id="occupationCategory"
              value={occupationCategory}
              onChange={(e) => setOccupationCategory(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer z-10"
              required
            >
              <option value="" disabled>직종을 선택해주세요</option>
              {occupationCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {occupationCategory && (
            <div className="space-y-2 animate-fade-in">
              <label htmlFor="detailedOccupation" className="text-sm font-semibold text-foreground block">
                세부 직종을 입력해주세요 <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="detailedOccupation"
                placeholder="예: 헤어 디자이너, 특수교사, 플로리스트 등"
                value={detailedOccupation}
                onChange={(e) => setDetailedOccupation(e.target.value)}
                className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="expectations" className="text-sm font-semibold text-foreground block">
              이 도구에서 가장 기대되는 점이 있다면 알려주세요 (선택)
            </label>
            <textarea
              id="expectations"
              placeholder="예: 단골 고객 취향을 정리해두고 싶어요 / 상사별로 주의사항을 적어두고 싶어요"
              value={expectations}
              onChange={(e) => setExpectations(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg text-lg py-6">
              소식 알림받기
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              서비스 소식과 베타 테스트 안내를 보내드려요. 스팸은 보내지 않습니다.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
