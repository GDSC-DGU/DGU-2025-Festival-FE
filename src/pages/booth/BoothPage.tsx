import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
} from "./BoothPage.styles";
import { booths } from "./data/booths";
import TopBar from "@/components/topbar/TopBar";

export default function BoothPage() {
  const [selectedDate, setSelectedDate] = useState("2025-05-27");
  const [boothType, setBoothType] = useState<"day" | "night">("day");
  const navigate = useNavigate();

  const filteredBooths = booths.filter(
    (booth) => booth.date === selectedDate && booth.type === boothType
  );

  return (
    <PageWrapper>
      <TopBar title="부스" isDark={true} />
      <ContentContainer>
        <DateSelector selected={selectedDate} onChange={setSelectedDate} />
        <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <MapContainer boothType={boothType} date={selectedDate} />
        </Wrapper>

        <ToolbarRow>
          <BoothTypeToggle value={boothType} onChange={setBoothType} />

          <WaitingCheckButton onClick={() => navigate("/waiting")}>
            웨이팅 확인
          </WaitingCheckButton>
        </ToolbarRow>

        {filteredBooths.map((booth) => (
          <BoothCard
            key={booth.id}
            boothId={booth.id}
            name={booth.name}
            intro={booth.intro}
          />
        ))}
      </ContentContainer>
    </PageWrapper>
  );
}
