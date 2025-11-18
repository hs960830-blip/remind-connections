import { Users, Scissors, Heart } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "영업직",
    description: "오늘 소개받은 A팀장, 다음에 뭐라고 먼저 꺼내야 할지 기억이 안 난 적 있나요?",
    subtext: "'언제 뵀었죠?'라고 묻는 순간, 신뢰는 조금씩 깎여요.",
    isPrimary: true
  },
  {
    icon: Scissors,
    title: "미용/네일",
    description: "\"지난번 컬러 뭐였죠?\" 고객에게 다시 물어보게 되는 순간들.",
    subtext: "시술 이력·취향이 한눈에 안 보이면, 단골도 위험해져요.",
    isPrimary: false
  },
  {
    icon: Heart,
    title: "교사/보좌",
    description: "아이마다, 상사마다, 파트너마다 다 다른 성향과 주의점.",
    subtext: "'누가 뭐를 싫어했었지?'라는 생각이 자꾸만 든다면, 기록 도구가 필요할 때입니다.",
    isPrimary: true
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">이런 상황, 익숙하지 않나요?</h2>
          <p className="text-xl text-muted-foreground">당신의 이야기일 수도 있어요.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={problem.isPrimary ? "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6" : "w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6"}>
                <problem.icon className={problem.isPrimary ? "h-7 w-7 text-primary" : "h-7 w-7 text-accent"} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">{problem.description}</p>
              <p className="text-sm text-muted-foreground italic">{problem.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
