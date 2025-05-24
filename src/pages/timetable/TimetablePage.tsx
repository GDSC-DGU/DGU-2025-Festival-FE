import {
  Container,
  HeaderContainer,
  SubTitle,
  MainTitle,
  SelectorContainer,
  ContentContainer,
  BodyContainer,
  Banner,
  Section,
} from "./TimetablePage.styles";
import { useState, useMemo, useEffect } from "react";
import DaySelectorList from "./components/DaySelectorList/DaySelectorList";
import { dates } from "./data/dates";
import TimetableSection from "./components/TimetableSection/TimetableSection";
import Lineup from "./components/Lineup/Lineup";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";

const TimetablePage = () => {
  const [selectedDate, setSelectedDate] = useState<string>(dates[0].value);

  const dayIndex = useMemo(() => {
    const index = dates.findIndex((d) => d.value === selectedDate);
    return index >= 0 ? index + 2 : null;
  }, [selectedDate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedDate]);

  const lineupBannerAnim = useOnScreenAnimation<HTMLDivElement>(0.4);
  const lineupContentAnim = useOnScreenAnimation<HTMLDivElement>(0.4);
  const timetableBannerAnim = useOnScreenAnimation<HTMLDivElement>(0.4);

  return (
    <Container>
      <HeaderContainer>
        <SubTitle>동국대학교 대동제</SubTitle>
        <MainTitle>Time Table</MainTitle>
        <SelectorContainer>
          <DaySelectorList
            dates={dates}
            selectedDate={selectedDate}
            onSelect={setSelectedDate}
          />
        </SelectorContainer>
      </HeaderContainer>
      <BodyContainer>
        <ContentContainer>
          <Section>
            <Banner
              ref={lineupBannerAnim.ref}
              className={`fade-up ${lineupBannerAnim.isVisible ? "visible" : ""}`}
            >
              Line Up
            </Banner>

            <Lineup
              ref={lineupContentAnim.ref}
              className={`fade-up ${lineupContentAnim.isVisible ? "visible" : ""}`}
              selectedDate={selectedDate}
            />
          </Section>
          <Section>
            <Banner
              ref={timetableBannerAnim.ref}
              className={`fade-up ${timetableBannerAnim.isVisible ? "visible" : ""}`}
            >
              DAY {dayIndex} Time Table
            </Banner>
            <TimetableSection selectedDate={selectedDate} />
          </Section>
        </ContentContainer>
      </BodyContainer>
    </Container>
  );
};

export default TimetablePage;
