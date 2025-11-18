import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  children: React.ReactNode;
}

const PrivacyPolicyModal = ({ children }: PrivacyPolicyModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">개인정보처리방침</DialogTitle>
          <DialogDescription>
            RE:MIND 서비스 이용을 위한 개인정보 수집 및 이용에 관한 안내입니다.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-semibold text-base mb-2">1. 개인정보의 수집 및 이용 목적</h3>
              <p className="text-muted-foreground leading-relaxed">
                RE:MIND는 다음의 목적을 위하여 개인정보를 수집 및 이용합니다:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
                <li>서비스 출시 및 베타 테스트 안내</li>
                <li>서비스 개선을 위한 의견 수렴</li>
                <li>신규 서비스 및 이벤트 정보 제공</li>
                <li>서비스 이용 통계 분석</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">2. 수집하는 개인정보 항목</h3>
              <p className="text-muted-foreground leading-relaxed">
                RE:MIND는 다음의 개인정보를 수집합니다:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
                <li>필수 항목: 이메일 주소, 직종 정보(대분류, 세부 직종)</li>
                <li>선택 항목: 서비스 기대사항</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">3. 개인정보의 보유 및 이용 기간</h3>
              <p className="text-muted-foreground leading-relaxed">
                수집된 개인정보는 서비스 제공 기간 동안 보유 및 이용됩니다. 다만, 다음의 경우에는 해당 기간 종료 시까지 보유합니다:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
                <li>관계 법령 위반에 따른 수사·조사 등이 진행중인 경우: 해당 수사·조사 종료 시까지</li>
                <li>서비스 이용에 따른 채권·채무관계 잔존 시: 해당 채권·채무관계 정산 완료 시까지</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                이용자는 언제든지 개인정보 수집 및 이용 동의를 철회하고 개인정보 삭제를 요청할 수 있습니다.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">4. 개인정보의 제3자 제공</h3>
              <p className="text-muted-foreground leading-relaxed">
                RE:MIND는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">5. 개인정보의 파기</h3>
              <p className="text-muted-foreground leading-relaxed">
                RE:MIND는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 파기 절차 및 방법은 다음과 같습니다:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
                <li>파기 절차: 이용자의 개인정보는 목적 달성 후 별도의 DB로 옮겨져 내부 방침 및 관련 법령에 따라 일정기간 저장된 후 파기됩니다.</li>
                <li>파기 방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">6. 이용자의 권리</h3>
              <p className="text-muted-foreground leading-relaxed">
                이용자는 다음과 같은 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-2">
                <li>개인정보 열람 요구</li>
                <li>개인정보 정정·삭제 요구</li>
                <li>개인정보 처리정지 요구</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                권리 행사는 서비스 내 설정 기능 또는 이메일을 통해 요청하실 수 있습니다.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">7. 개인정보 보호책임자</h3>
              <p className="text-muted-foreground leading-relaxed">
                RE:MIND는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                개인정보와 관련한 문의사항이 있으시면 아래의 연락처로 문의해 주시기 바랍니다.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">8. 고지의 의무</h3>
              <p className="text-muted-foreground leading-relaxed">
                현 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 시에는 시행 최소 7일 전부터 서비스 내 공지사항을 통해 고지할 것입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                본 방침은 2025년 11월 18일부터 시행됩니다.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
