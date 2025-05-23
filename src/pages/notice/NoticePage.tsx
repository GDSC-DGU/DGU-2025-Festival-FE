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
import { LostListAPI } from "@/api/notice/lost";
import { NoticeListAPI } from "@/api/notice/notice";
import { useNoticeStore } from "@/stores/useNoticeStore";
import { useLostStore } from "@/stores/useLostStore";

const STORAGE_KEY = "notice_tab";

const NoticePage = () => {
  const noticeList = useNoticeStore((state) => state.noticeList);
  const lostList = useLostStore((state) => state.lostList);

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

  const handleToggle = (selected: NoticeTabType) => {
    setTab(selected);
    sessionStorage.setItem(STORAGE_KEY, selected);
  };

  useEffect(() => {
    const fetchNoticeList = async () => {
      await NoticeListAPI();
    };

    const fetchLostList = async () => {
      await LostListAPI();
    };

    fetchNoticeList();
    fetchLostList();
  }, []);

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
            <NoticeList notices={noticeList} />
          ) : (
            <LostGrid lostItems={lostList} />
          )}
        </ToggleContainer>
      </ContentContainer>
    </Container>
  );
};

export default NoticePage;
