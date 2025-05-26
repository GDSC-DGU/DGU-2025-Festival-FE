import { useState, useEffect } from 'react';
import ModalPortal from '@/components/common/ModalPortal';
import * as S from './WaitingModal.styles';
import {
  requestPhoneCert,
  verifyPhoneCode,
  reserveBooth,
} from "@/api/reservation";
import { requestPermissionAndGetToken } from '@/firebase';

interface Booth {
  id: string;
  name: string;
}

interface WaitingModalProps {
  booth: Booth;
  onConfirm: (data: { boothId: string; people: number; phone: string; name: string }) => void;
  onCancel: () => void;
  onClose: () => void;
}

export default function WaitingModal({ booth, onConfirm, onCancel }: WaitingModalProps) {
  const [step, setStep] = useState<'people' | 'phone' | 'code' | 'name' | 'done'>('people');
  const [people, setPeople] = useState<number>(1);
  const [phone, setPhone] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [name, setName] = useState('');
  const [alreadyReserved, setAlreadyReserved] = useState(false); 

  useEffect(() => {
    const askPermissionAndGetToken = async () => {
      try {
        if (Notification.permission === 'default') {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            const token = await requestPermissionAndGetToken();
            if (token) console.log('FCM 토큰:', token);
          }
        } else if (Notification.permission === 'granted') {
          const token = await requestPermissionAndGetToken();
          if (token) console.log('FCM 토큰:', token);
        } else {
          console.log('알림 권한 거부됨');
        }
      } catch (err) {
        console.error('알림 권한 요청 또는 토큰 발급 실패:', err);
      }
    };
    askPermissionAndGetToken();
  }, []);

  const handleNext = () => {
    if (people > 0) setStep('phone');
  };

  const handleSendCode = async () => {
    if (phone.length === 11) {
      try {
        const res = await requestPhoneCert(phone);
        if (res.success) {
          setCodeSent(true);
          alert("인증번호가 발송되었습니다.");
        } else {
          alert("인증번호 요청에 실패했습니다.");
        }
      } catch {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  const handleVerify = async () => {
    try {
      const token = await requestPermissionAndGetToken();
      if (!token) {
        alert("알림 권한이 필요합니다.");
        return;
      }

      const res = await verifyPhoneCode({
        phoneNumber: phone,
        certificationNumber: verifyCode,
        browserToken: token,
      });

      if (res.success) {
        setVerified(true);
        alert("인증이 완료되었습니다.");
        setStep("name");
      } else {
        alert("인증 실패: 코드가 일치하지 않습니다.");
      }
    } catch {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleConfirm = async () => {
    if (!verified || name.trim() === '') return;

    try {
      const token = await requestPermissionAndGetToken();
      if (!token) {
        alert("알림 권한이 필요합니다.");
        return;
      }

      const res = await reserveBooth(booth.id, {
        browserToken: token,
        phoneNumber: phone,
        name: name.trim(),
        attendance: people,
      });

      if (res.success) {
        localStorage.setItem("userPhoneNumber", phone);
        onConfirm({ boothId: booth.id, people, phone, name: name.trim() });
        setStep("done");
      } else if ((res.error as { code: string })?.code === '40904') {
        setAlreadyReserved(true);
        setStep("done");
      } else {
        alert("예약에 실패했습니다.");
      }
    } catch {
      alert("예약 중 오류가 발생했습니다.");
    }
  };

  return (
    <ModalPortal>
      <S.Overlay>
        <S.ModalBox>
          <S.Title>
            {step === 'done'
              ? alreadyReserved
                ? '이미 예약됨'
                : `${booth.name} 웨이팅 완료`
              : `${booth.name} 웨이팅 하기`}
          </S.Title>

          {/* STEP 1: 인원수 입력 */}
          {step === 'people' && (
            <>
              <S.Label htmlFor="people">인원수</S.Label>
              <S.Input
                id="people"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={people === 0 ? '' : people}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d*$/.test(val)) setPeople(val === '' ? 0 : Number(val));
                }}
              />
              <S.Notice>
                안내 후 10분 안에 오시지 않으면<br />
                예약이 자동으로 취소될 수 있어요.
              </S.Notice>
              <S.ButtonGroup>
                <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
                <S.ConfirmButton onClick={handleNext}>다음</S.ConfirmButton>
              </S.ButtonGroup>
            </>
          )}

          {/* STEP 2: 전화번호 인증 */}
          {step === 'phone' && (
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
                <S.SendCodeButton onClick={handleSendCode} disabled={phone.length !== 11}>
                  인증
                </S.SendCodeButton>
              </S.PhoneInputWrapper>

              {codeSent && (
                <>
                  <S.SmallNotice>인증번호를 다시 받으려면 인증 버튼을 다시 눌러주세요.</S.SmallNotice>
                  <S.Label htmlFor="code">인증번호 입력</S.Label>
                  <S.PhoneInputWrapper>
                    <S.Input
                      id="code"
                      type="text"
                      placeholder="4자리 숫자"
                      maxLength={4}
                      value={verifyCode}
                      onChange={(e) => setVerifyCode(e.target.value)}
                    />
                    <S.SendCodeButton onClick={handleVerify} disabled={verifyCode.length !== 4}>
                      확인
                    </S.SendCodeButton>
                  </S.PhoneInputWrapper>
                </>
              )}

              <S.ButtonGroup>
                <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
              </S.ButtonGroup>
            </>
          )}

          {/* STEP 3: 이름 입력 */}
          {step === 'name' && (
            <>
              <S.Label htmlFor="name">대표자 이름</S.Label>
              <S.Input
                id="name"
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <S.Notice>입력하신 이름으로 예약이 진행됩니다.</S.Notice>
              <S.ButtonGroup>
                <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
                <S.ConfirmButton onClick={handleConfirm} disabled={!name.trim()}>
                  예약 확정
                </S.ConfirmButton>
              </S.ButtonGroup>
            </>
          )}

          {/* STEP 4: 완료 or 중복 안내 */}
          {step === 'done' && (
            <>
              <S.Notice>
                {alreadyReserved ? (
                  <>
                    이미 웨이팅을 등록한 기록이 있어요.
                    <br />
                    한 사람당 1개의 웨이팅만 가능합니다.
                  </>
                ) : (
                  <>
                    {booth.name}의 웨이팅이 확정되었습니다.
                  </>
                )}
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
