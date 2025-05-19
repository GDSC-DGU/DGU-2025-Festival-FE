import TopBar from "@/components/topbar/TopBar";
import Toggle from "@/components/toggle/Toggle";
import { useState } from "react";
import {
  Container,
  ContentContainer,
  ToggleContainer,
} from "./NoticePage.styles";
import NoticeList from "./components/NoticeList/NoticeList";

const NoticePage = () => {
  const [isLeftSelected, setIsLeftSelected] = useState<boolean>(true);

  return (
    <Container>
      <TopBar title="공지사항 및 분실물" />
      <ContentContainer>
        <Toggle
          options={["공지사항", "분실물"]}
          isLeftSelected={isLeftSelected}
          setIsLeftSelected={setIsLeftSelected}
        />
        <ToggleContainer>
          <NoticeList />
        </ToggleContainer>
      </ContentContainer>
    </Container>
  );
};

export default NoticePage;
