import { useState, useEffect } from "react";
import TopBar from "@/components/topbar/TopBar";
import Toggle from "@/components/toggle/Toggle";
import {
  Container,
  ContentContainer,
  Section,
  ToggleContainer,
  WriteButton,
} from "./index.styles";
import NoticeList from "@/pages/notice/components/NoticeList/NoticeList";
import LostGrid from "@/pages/notice/components/LostGrid/LostGrid";
import { noticeItems } from "@/pages/notice/data/noticeItems";
import { lostItems } from "@/pages/notice/data/lostItems";
import WriteIcon from "@/assets/icons/write.svg";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "notice_tab";

const AdminNoticePage = () => {
  const navigate = useNavigate();
  const [isLeftSelected, setIsLeftSelected] = useState<boolean>(true);
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

  const handleWrite = () => {
    const type = isLeftSelected ? "notice" : "lost";
    navigate(`/admin/write?type=${type}`);
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
          <WriteButton onClick={handleWrite}>
            <img src={WriteIcon} width={24} height={24} />
          </WriteButton>
        </Section>

        <ToggleContainer>
          {isLeftSelected ? (
            <NoticeList notices={noticeItems} isAdmin={true} />
          ) : (
            <LostGrid isAdmin={true} lostItems={lostItems} />
          )}
        </ToggleContainer>
      </ContentContainer>
    </Container>
  );
};

export default AdminNoticePage;
