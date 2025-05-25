import TopBar from "@/components/topbar/TopBar";
import Toggle from "@/components/toggle/Toggle";
import LostGrid from "./components/LostGrid/LostGrid";
import { useState, useEffect, useCallback } from "react";
import {
  Container,
  ContentContainer,
  ToggleContainer,
  Section,
  QuestionContainer,
  QuestionText,
} from "./NoticePage.styles";
import NoticeList from "./components/NoticeList/NoticeList";
import QuestionIcon from "@/assets/icons/question.svg";
import { LostListAPI } from "@/api/notice/lost";
import { NoticeListAPI } from "@/api/notice/notice";
import { useNoticeStore } from "@/stores/useNoticeStore";
import { useLostStore } from "@/stores/useLostStore";
import FindModal from "./components/FindModal/FindModal";

const STORAGE_KEY = "notice_tab";

const NoticePage = () => {
  const { noticeList, setNoticeList } = useNoticeStore();
  const lostList = useLostStore((state) => state.lostList);

  type NoticeTabType = "공지사항" | "분실물";
  const [tab, setTab] = useState<NoticeTabType>("공지사항");
  const [showQuestionContent, setShowQuestionContent] =
    useState<boolean>(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved === "공지사항" || saved === "분실물") {
      setTab(saved);
    } else {
      setTab("공지사항");
    }
  }, []);

  const handleToggle = (selected: NoticeTabType) => {
    setTab(selected);
    sessionStorage.setItem(STORAGE_KEY, selected);
  };

  const fetchNoticeList = useCallback(async () => {
    const newList = await NoticeListAPI();
    if (Array.isArray(newList)) {
      setNoticeList(newList);
    }
  }, [setNoticeList]);

  const fetchLostList = async () => {
    await LostListAPI();
  };

  useEffect(() => {
    fetchNoticeList();
    fetchLostList();
  }, [fetchNoticeList]);

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
                <FindModal onClose={() => setShowQuestionContent(false)} />
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
