import { useState, useEffect } from "react";
import TopBar from "@/components/topbar/TopBar";
import Toggle from "@/components/toggle/Toggle";
import RoleTag from "@/components/role/RoleTag";
import {
  Container,
  ContentContainer,
  Section,
  ToggleContainer,
  WriteButton,
} from "./index.styles";
import NoticeList from "@/pages/notice/components/NoticeList/NoticeList";
import LostGrid from "@/pages/notice/components/LostGrid/LostGrid";
import WriteIcon from "@/assets/icons/write.svg";
import { useNavigate } from "react-router-dom";
import FloatingLogoutButton from "./components/FloatingLogoutButton/FloatingLogoutButton";
import { useNoticeStore } from "@/stores/useNoticeStore";
import { useLostStore } from "@/stores/useLostStore";
import { LostListAPI } from "@/api/notice/lost";
import { NoticeListAPI } from "@/api/notice/notice";

const STORAGE_KEY = "notice_tab";

const AdminNoticePage = () => {
  const navigate = useNavigate();
  const noticeList = useNoticeStore((state) => state.noticeList);
  const lostList = useLostStore((state) => state.lostList);
  type NoticeTabType = "공지사항" | "분실물";
  const [tab, setTab] = useState<NoticeTabType>("공지사항");
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

  const handleWrite = () => {
    const type = tab === "공지사항" ? "notice" : "lost";
    navigate(`/admin/write?type=${type}`);
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
      <RoleTag />
      <ContentContainer>
        <Section>
          <Toggle
            options={["공지사항", "분실물"]}
            current={tab}
            onChange={handleToggle}
          />
          <WriteButton onClick={handleWrite}>
            <img src={WriteIcon} width={24} height={24} />
          </WriteButton>
        </Section>

        <ToggleContainer>
          {tab === "공지사항" ? (
            <NoticeList notices={noticeList} isAdmin={true} />
          ) : (
            <LostGrid isAdmin={true} lostItems={lostList} />
          )}
        </ToggleContainer>
      </ContentContainer>
      <FloatingLogoutButton />
    </Container>
  );
};

export default AdminNoticePage;
