import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import BoothTypeToggle from "./components/BoothTypeToggle";
import DateSelector from "./components/DateSelector";
import MapContainer from "./components/MapContainer";
import BoothCard from "./components/BoothCard";
import { Wrapper } from "@googlemaps/react-wrapper";
import {
  PageWrapper,
  ToolbarRow,
  WaitingCheckButton,
  ContentContainer,
  BoothListWrapper,
  Update,
} from "./BoothPage.styles";
import { booths } from "./data/booths";
import TopBar from "@/components/topbar/TopBar";
import { useBoothStore } from "./stores/useBoothStore"; // ✅ 추가

export default function BoothPage() {
  const [selectedDate, setSelectedDate] = useState("2025-05-27");
  const [boothType, setBoothType] = useState<"day" | "night">("day");
  const [, setShowModal] = useState(false);

  const isLiked = useBoothStore((state) => state.isLiked);
  const showOnlyLiked = useBoothStore((state) => state.showOnlyLiked);

  const filteredBooths = booths.filter((booth) => {
    const isSameDate = booth.date === selectedDate;
    const isSameType = booth.type === boothType;
    const isLikeOk = !showOnlyLiked || isLiked(booth.id);
    return isSameDate && isSameType && isLikeOk;
  });

  return (
    <PageWrapper>
      <TopBar title="부스" />
      <ContentContainer>
        <DateSelector selected={selectedDate} onChange={setSelectedDate} />
        <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <MapContainer boothType={boothType} date={selectedDate} />
        </Wrapper>

        <ToolbarRow>
          <BoothTypeToggle value={boothType} onChange={setBoothType} />
          <WaitingCheckButton onClick={() => setShowModal(true)}>
            웨이팅 확인
          </WaitingCheckButton>
        </ToolbarRow>

        {filteredBooths.length > 0 ? (
          <BoothListWrapper>
            {filteredBooths.map((booth) => (
              <BoothCard
                key={booth.id}
                boothId={booth.id}
                name={booth.name}
                intro={booth.intro}
                image={booth.images[0]}
              />
            ))}
            {/* ✅ 부스 리스트 내부 맨 끝에 안내 메시지 박스 추가 */}
            {(selectedDate === "2025-05-28" ||
              selectedDate === "2025-05-29") && (
              <Update>부스 추가 업데이트 예정이에요</Update>
            )}
          </BoothListWrapper>
        ) : (
          <div
            style={{
              padding: "40px 0",
              textAlign: "center",
              color: "#949db8",
              fontSize: "14px",
            }}
          >
            찜한 목록이 없어요.
          </div>
        )}
      </ContentContainer>
    </PageWrapper>
  );
}
