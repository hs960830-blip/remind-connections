import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X, Plus } from "lucide-react";

const ServicePreview = () => {
  const [showMemoModal, setShowMemoModal] = useState(false);

  return (
    <section id="service-preview" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl space-y-24">
        {/* List View */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
              고객 리스트
            </div>
            <h2 className="text-4xl font-bold text-foreground">고객을 한눈에 정리하는 리스트 화면</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              누구를 언제 만났고, 어떤 대화를 나눴는지 카드 하나씩에 정리됩니다. 검색과 필터로 원하는 고객을 빠르게 찾으세요.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-card rounded-2xl border border-border shadow-[var(--card-shadow)] p-6 max-w-md mx-auto">
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="이름으로 검색하기" 
                  className="w-full bg-muted/50 px-4 py-3 rounded-xl text-sm border border-border"
                  disabled
                />
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs rounded-full">전체</span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full">영업</span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full">미용</span>
                  <span className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full">VIP</span>
                </div>
                <div className="space-y-3 pt-2">
                  {[
                    { name: "김지은", role: "네일 단골 고객", tags: ["#파스텔톤", "#손얇음"], date: "2025.11.10", memo: "다음엔 겨울 느낌의 컬러 추천해달라 하심" },
                    { name: "박현우", role: "B사 팀장 (영업 대상)", tags: ["#커피좋아함", "#아이셋"], date: "2025.11.03", memo: "아이 야구 이야기 꺼냈을 때 분위기 풀어졌음" },
                    { name: "이서연", role: "프리랜서 작가", tags: ["#조용함", "#차선호"], date: "2025.10.28", memo: "작업 마감 후 여유로울 때 연락하면 좋음" }
                  ].map((customer, idx) => (
                    <div key={idx} className="bg-background border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{customer.name}</h3>
                          <p className="text-xs text-muted-foreground">{customer.role}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{customer.date}</span>
                      </div>
                      <div className="flex gap-1.5 mb-2 flex-wrap">
                        {customer.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">{tag}</span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">{customer.memo}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail View */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-2xl border border-border shadow-[var(--card-shadow)] p-6 max-w-md mx-auto">
            <div className="space-y-6">
              <div className="pb-4 border-b border-border">
                <h3 className="text-2xl font-bold text-foreground mb-1">김지은</h3>
                <p className="text-sm text-muted-foreground">프리랜서 디자이너 / 네일 단골</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">#수줍음</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">#파스텔톤선호</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">#왼손약함</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">📋 기본 정보</h4>
                  <div className="bg-muted/30 rounded-lg p-3 space-y-1 text-sm">
                    <p className="text-muted-foreground"><span className="font-medium text-foreground">첫 만남:</span> 2024.07.12 / 친구 소개</p>
                    <p className="text-muted-foreground"><span className="font-medium text-foreground">좋아하는 것:</span> 파스텔 톤, 자연스러운 느낌</p>
                    <p className="text-muted-foreground"><span className="font-medium text-foreground">싫어하는 것:</span> 너무 진한 컬러</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">⚠️ 주의사항</h4>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 text-sm text-muted-foreground">
                    손톱이 약해서 너무 강한 제거제를 쓰면 손톱이 갈라진 적 있음
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">💬 최근 대화</h4>
                  <div className="space-y-2">
                    <div className="border-l-2 border-primary pl-3">
                      <p className="text-xs text-muted-foreground mb-1">2025.11.10</p>
                      <p className="text-sm text-muted-foreground">겨울 느낌 컬러 고민 중. 다음번엔 "쿨한 느낌의 겨울 레드" 추천 요청.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-2">
              고객 상세
            </div>
            <h2 className="text-4xl font-bold text-foreground">다음 만남 전에 10초만 보면 되는 '고객 상세 카드'</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              기본 정보, 호불호, 주의사항, 최근 대화 내용까지. 만나기 직전 이 화면만 훑으면 준비 완료입니다.
            </p>
          </div>
        </div>

        {/* Memo Input */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
              메모 추가
            </div>
            <h2 className="text-4xl font-bold text-foreground">만난 직후, 30초만 투자하는 메모</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              방금 나눈 대화, 다음에 꼭 기억해야 할 것들을 빠르게 기록하세요. 간단한 메모가 다음 만남의 차이를 만듭니다.
            </p>
            <Button 
              onClick={() => setShowMemoModal(true)}
              className="bg-gradient-to-r from-accent to-accent/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              메모 작성 예시 보기
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-card rounded-2xl border border-border shadow-[var(--card-shadow)] p-6 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">새 메모 작성</h3>
                  <span className="text-sm text-muted-foreground">2025.11.18</span>
                </div>
                <textarea 
                  placeholder="오늘은 이런 대화를 나눴어요..."
                  className="w-full h-32 bg-muted/30 border border-border rounded-xl p-4 text-sm resize-none"
                  disabled
                  value="다음 달에 동생 결혼식 있음. 손 관리는 2주 전에 다시 오겠다고 하심. 다음 방문 때 결혼식 이야기 하면 좋을 거 같다."
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="important" className="rounded" disabled />
                  <label htmlFor="important" className="text-sm text-muted-foreground">다음 만남 전에 꼭 다시 보고 싶어요</label>
                </div>
                <Button className="w-full bg-primary" disabled>저장하기</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showMemoModal && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowMemoModal(false)}>
            <div className="bg-card rounded-2xl border border-border shadow-2xl p-6 max-w-md w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">메모 작성</h3>
                <button onClick={() => setShowMemoModal(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">날짜</label>
                  <input type="text" value="2025.11.18" disabled className="w-full bg-muted/30 border border-border rounded-lg px-4 py-2 text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">이번 만남/통화 내용</label>
                  <textarea 
                    placeholder="오늘은 이런 대화를 나눴어요..."
                    className="w-full h-32 bg-muted/30 border border-border rounded-lg p-4 text-sm resize-none"
                    defaultValue="다음 달에 동생 결혼식 있음. 손 관리는 2주 전에 다시 오겠다고 하심. 결혼식 얘기 해주면 좋아할 듯."
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="modal-important" className="rounded" />
                  <label htmlFor="modal-important" className="text-sm text-muted-foreground">다음 만남 전에 꼭 다시 보고 싶어요</label>
                </div>
                <Button className="w-full bg-primary" onClick={() => setShowMemoModal(false)}>저장하기</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicePreview;
