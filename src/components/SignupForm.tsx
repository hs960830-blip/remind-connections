import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const occupationCategories = [
  "미용",
  "네일",
  "영업",
  "교육",
  "서비스",
  "의료",
  "기타"
];

// Validation schema
const signupSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "올바른 이메일 형식이 아닙니다" })
    .max(255, { message: "이메일은 255자를 초과할 수 없습니다" }),
  occupationCategory: z
    .string()
    .trim()
    .nonempty({ message: "직종 카테고리를 선택해주세요" })
    .max(50, { message: "직종 카테고리는 50자를 초과할 수 없습니다" }),
  detailedOccupation: z
    .string()
    .trim()
    .nonempty({ message: "세부 직종을 입력해주세요" })
    .max(100, { message: "세부 직종은 100자를 초과할 수 없습니다" }),
  expectations: z
    .string()
    .trim()
    .max(1000, { message: "기대사항은 1000자를 초과할 수 없습니다" })
    .optional(),
});

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [occupationCategory, setOccupationCategory] = useState("");
  const [detailedOccupation, setDetailedOccupation] = useState("");
  const [expectations, setExpectations] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate input
      const validatedData = signupSchema.parse({
        email: email,
        occupationCategory: occupationCategory,
        detailedOccupation: detailedOccupation,
        expectations: expectations || undefined,
      });

      // Insert into database
      const { error } = await supabase.from("signups").insert({
        email: validatedData.email,
        occupation_category: validatedData.occupationCategory,
        detailed_occupation: validatedData.detailedOccupation,
        expectations: validatedData.expectations || null,
      });

      if (error) {
        // Check for duplicate email
        if (error.code === "23505") {
          toast({
            title: "이미 등록된 이메일",
            description: "해당 이메일은 이미 등록되어 있습니다.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }

        throw error;
      }

      setSubmitted(true);
      toast({
        title: "관심 등록 완료!",
        description: "RE:MIND 출시 소식을 가장 먼저 알려드릴게요.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "입력 오류",
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "오류 발생",
          description: "등록 중 문제가 발생했습니다. 다시 시도해주세요.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }
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
              className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">선택해주세요</option>
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
                placeholder={
                  occupationCategory === "미용" ? "예: 헤어 디자이너" :
                  occupationCategory === "교육" ? "예: 특수교사" :
                  "예: 플로리스트"
                }
                value={detailedOccupation}
                onChange={(e) => setDetailedOccupation(e.target.value)}
                className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="expectations" className="text-sm font-semibold text-foreground block">
              이 도구에서 가장 기대되는 점이 있다면 알려주세요 <span className="text-muted-foreground text-xs">(선택)</span>
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
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg text-lg py-6 disabled:opacity-50"
            >
              {isSubmitting ? "등록 중..." : "소식 알림받기"}
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
