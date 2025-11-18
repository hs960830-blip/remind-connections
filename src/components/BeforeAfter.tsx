import { X, Check } from "lucide-react";

const BeforeAfter = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">달라지는 당신의 하루</h2>
          <p className="text-xl text-muted-foreground">10초의 차이가 만드는 변화</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl border border-destructive/20 p-8 space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Before</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  고객을 만나기 직전, 카톡·엑셀·머릿속을 뒤지며 "이 사람 뭐 좋아했지...?" 당황하는 순간
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  "언제 뵀었죠?", "지난번에 뭐 했었죠?" 물어보며 신뢰가 조금씩 깎이는 경험
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  막상 만났을 땐 기억나는데, 나중에는 까먹어서 다시 같은 질문 반복
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-2xl border border-primary/20 p-8 space-y-4 shadow-[var(--card-shadow)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">After</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  미팅 전 10초, RE:MIND의 고객 카드만 훑고 나가면 끝. 모든 정보가 한눈에.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  "저번에 말씀하신 아드님 야구 경기 어떻게 되셨어요?" 자연스럽게 대화 시작
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  만난 직후 30초만 메모하면, 다음 번엔 더 완벽하게 준비된 상태로
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
