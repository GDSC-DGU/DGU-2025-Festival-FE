import { useState } from "react";
import Toggle from "@/components/toggle/Toggle";
import DaySelector from "@/components/daySelector/DaySelector";
import MapContainer from "./components/MapContainer";
import BoothCard from "./components/BoothCard";
import type { Booth } from "@/types/booth";
import { dates } from "./data/dates";
import {
  PageWrapper,
  ContentContainer,
  BoothListWrapper,
} from "./BoothPage.styles";
import { booths } from "./data/booths";
import TopBar from "@/components/topbar/TopBar";
import { useBoothStore } from "./stores/useBoothStore";

export default function BoothPage() {
  const [selectedDate, setSelectedDate] = useState("2025-05-29");

  type BoothTabType = "day" | "night";
  const [tab, setTab] = useState<BoothTabType>("day");
  // const [showModal, setShowModal] = useState(false);

  const isLiked = useBoothStore((state) => state.isLiked);
  const showOnlyLiked = useBoothStore((state) => state.showOnlyLiked);

  const filteredBooths = booths.filter((booth) => {
    const isSameDate = booth.date === selectedDate;
    const isSameType = booth.type === tab;
    const isLikeOk = !showOnlyLiked || isLiked(booth.id);
    return isSameDate && isSameType && isLikeOk;
  });

  const handleToggle = (selected: BoothTabType) => {
    setTab(selected);
  };

  return (
    <PageWrapper>
      <TopBar title="부스" />
      <ContentContainer>
        <DaySelector
          dates={dates}
          selectedDate={selectedDate}
          onSelect={setSelectedDate}
        />
        <MapContainer boothType={tab} date={selectedDate} />
        <Toggle
          options={[
            { label: "낮 부스", value: "day" },
            { label: "야간 부스", value: "night" },
          ]}
          current={tab}
          onChange={handleToggle}
        />
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
