import TopBar from "@/components/topbar/TopBar";
import Toggle from "@/components/toggle/Toggle";
import LostGrid from "./components/LostGrid/LostGrid";
import { useState, useEffect } from "react";
import {
  Container,
  ContentContainer,
  ToggleContainer,
  Section,
  QuestionContainer,
  QuestionText,
  FloatingBox,
  FloatingText,
} from "./NoticePage.styles";
import NoticeList from "./components/NoticeList/NoticeList";
import QuestionIcon from "@/assets/icons/question.svg";

const STORAGE_KEY = "notice_tab";

const NoticePage = () => {
  const [isLeftSelected, setIsLeftSelected] = useState<boolean>(true);
  const [showQuestionContent, setShowQuestionContent] =
    useState<boolean>(false);
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved === "lost") {
      setIsLeftSelected(false);
    }
  }, []);

  const handleToggle = (selected: boolean) => {
    setIsLeftSelected(selected);
    sessionStorage.setItem(STORAGE_KEY, selected ? "notice" : "lost");
  };

  return (
    <Container>
      <TopBar title="공지사항 및 분실물" />
      <ContentContainer>
        <Section>
          <Toggle
            options={["공지사항", "분실물"]}
            isLeftSelected={isLeftSelected}
            setIsLeftSelected={handleToggle}
          />
          {!isLeftSelected && (
            <QuestionContainer
              onClick={() => setShowQuestionContent(!showQuestionContent)}
            >
              <img src={QuestionIcon} width={20} height={20} alt="?" />
              <QuestionText>어디서 찾나요?</QuestionText>
              {showQuestionContent && (
                <FloatingBox>
                  <FloatingText>
                    잃어버린 분실물은 000에서 찾으면 됩니다. {"\n"}분실물을
                    습득하셨다면 000으로 가져와주세요.
                  </FloatingText>
                </FloatingBox>
              )}
            </QuestionContainer>
          )}
        </Section>

        <ToggleContainer>
          {isLeftSelected ? <NoticeList /> : <LostGrid />}
        </ToggleContainer>
      </ContentContainer>
    </Container>
  );
};

export default NoticePage;
