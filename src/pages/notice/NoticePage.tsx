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
import { noticeItems } from "./data/noticeItems";
import { lostItems } from "./data/lostItems";
import { sendRequest } from "@/api/request";
import { lambdaInstance } from "@/api/instance";

const STORAGE_KEY = "notice_tab";

const NoticePage = () => {
  type NoticeTabType = "공지사항" | "분실물";
  const [tab, setTab] = useState<NoticeTabType>("공지사항");
  const [showQuestionContent, setShowQuestionContent] =
    useState<boolean>(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved === "분실물") {
      setTab("분실물");
    }
  }, []);

  const api = async () => {
    const response = await sendRequest(lambdaInstance, "GET", "/notices");
    console.log(response.data);
  };

  const handleToggle = (selected: NoticeTabType) => {
    setTab(selected);
    sessionStorage.setItem(STORAGE_KEY, selected);
    api();
  };

  return (
    <Container>
      <TopBar title="공지사항 및 분실물" />
      <ContentContainer>
        <Section>
          <Toggle
            options={["공지사항", "분실물"]}
            current={tab}
            onChange={handleToggle}
          />
          {tab === "분실물" && (
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
          {tab === "공지사항" ? (
            <NoticeList notices={noticeItems} />
          ) : (
            <LostGrid lostItems={lostItems} />
          )}
        </ToggleContainer>
      </ContentContainer>
    </Container>
  );
};

export default NoticePage;
