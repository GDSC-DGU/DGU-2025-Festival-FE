import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import BoothTypeToggle from "./components/BoothTypeToggle";
import DateSelector from "./components/DateSelector";
import MapContainer from "./components/MapContainer";
import BoothCard from "./components/BoothCard";
import type { Booth } from "@/types/booth";
import {
  PageWrapper,
  ToolbarRow,
  ContentContainer,
  BoothListWrapper,
  Update,
} from "./BoothPage.styles";
import { booths } from "./data/booths";
import TopBar from "@/components/topbar/TopBar";
import { useBoothStore } from "./stores/useBoothStore"; // ✅ 추가

export default function BoothPage() {
  const [selectedDate, setSelectedDate] = useState("2025-05-28");
  const [boothType, setBoothType] = useState<"day" | "night">("day");
  // const [showModal, setShowModal] = useState(false);

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
        <MapContainer boothType={boothType} date={selectedDate} />
        <ToolbarRow>
          <BoothTypeToggle value={boothType} onChange={setBoothType} />
          {/* <WaitingCheckButton onClick={() => setShowModal(true)}>
            웨이팅 확인
          </WaitingCheckButton> */}
        </ToolbarRow>

        {filteredBooths.length > 0 ? (
          <BoothListWrapper>
            {filteredBooths.map((booth) => {
              const boothData = booth as Booth;
              return (
                <BoothCard
                  key={boothData.id}
                  boothId={boothData.id}
                  name={boothData.name}
                  intro={boothData.intro}
                  image={boothData.images[0]}
                  isLinenow={boothData.isLinenow}
                  linenowLink={boothData?.linenowLink}
                  isManage={boothData?.isManage}
                />
              );
            })}
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
