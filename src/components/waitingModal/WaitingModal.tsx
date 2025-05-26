import { useState } from "react";
import ModalPortal from "@/components/common/ModalPortal";
import * as S from "./WaitingModal.styles";

interface Booth {
  id: string;
  name: string;
}

interface WaitingModalProps {
  booth: Booth;
  onConfirm: (data: { boothId: string; people: number; phone: string }) => void;
  onCancel: () => void;
}

export default function WaitingModal({
  booth,
  onConfirm,
  onCancel,
}: WaitingModalProps) {
  const [step, setStep] = useState<"people" | "phone" | "code" | "done">(
    "people"
  );
  const [people, setPeople] = useState<number>(1);
  const [phone, setPhone] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleNext = () => {
    if (people > 0) {
      setStep("phone");
    }
  };

  const handleSendCode = () => {
    if (phone.length === 11) {
      const generatedCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      setSentCode(generatedCode);
      setCodeSent(true);
      console.log("전송된 인증번호:", generatedCode);
    }
  };

  const handleVerify = () => {
    if (verifyCode === sentCode) {
      setVerified(true);
      alert("인증번호가 확인되었습니다!");
    } else {
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  const handleConfirm = () => {
    if (verified) {
      onConfirm({ boothId: booth.id, people, phone });
      setStep("done");
    }
  };

  return (
    <ModalPortal>
      <S.Overlay>
        <S.ModalBox>
          <S.Title>
            {step === "done"
              ? `${booth.name} 웨이팅 완료`
              : `${booth.name} 웨이팅 하기`}
          </S.Title>

          {step === "people" && (
            <>
              <S.Label htmlFor="people">인원수</S.Label>
              <S.Input
                id="people"
                type="number"
                min={1}
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
              />
              <S.Notice>
                안내 후 10분 안에 오시지 않으면
                <br />
                예약이 자동으로 취소될 수 있어요.
              </S.Notice>
              <S.ButtonGroup>
                <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
                <S.ConfirmButton onClick={handleNext}>다음</S.ConfirmButton>
              </S.ButtonGroup>
            </>
          )}

          {step === "phone" && (
            <>
              <S.Label htmlFor="phone">전화번호</S.Label>
              <S.PhoneInputWrapper>
                <S.Input
                  id="phone"
                  type="tel"
                  placeholder="01012345678"
                  maxLength={11}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <S.SendCodeButton
                  onClick={handleSendCode}
                  disabled={phone.length !== 11}
                >
                  인증
                </S.SendCodeButton>
              </S.PhoneInputWrapper>

              {codeSent && (
                <>
                  <S.SmallNotice>
                    인증번호를 다시 받으려면 인증 버튼을 다시 눌러주세요.
                  </S.SmallNotice>
                  <S.Label htmlFor="code">인증번호 입력</S.Label>
                  <S.PhoneInputWrapper>
                    <S.Input
                      id="code"
                      type="text"
                      placeholder="6자리 숫자"
                      maxLength={6}
                      value={verifyCode}
                      onChange={(e) => setVerifyCode(e.target.value)}
                    />
                    <S.SendCodeButton
                      onClick={handleVerify}
                      disabled={verifyCode.length !== 6}
                    >
                      확인
                    </S.SendCodeButton>
                  </S.PhoneInputWrapper>
                </>
              )}

              <S.ButtonGroup>
                <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
                <S.ConfirmButton onClick={handleConfirm} disabled={!verified}>
                  예약 확정
                </S.ConfirmButton>
              </S.ButtonGroup>
            </>
          )}

          {step === "done" && (
            <>
              <S.Notice>
                {booth.name}의 웨이팅이 확정되었습니다.
                <br />
                나의 순번: 대기 3팀
                <br />
                앞에 2팀이 대기 중입니다.
              </S.Notice>
              <S.ButtonGroup>
                <S.ConfirmButton onClick={onCancel}>닫기</S.ConfirmButton>
              </S.ButtonGroup>
            </>
          )}
        </S.ModalBox>
      </S.Overlay>
    </ModalPortal>
  );
}
