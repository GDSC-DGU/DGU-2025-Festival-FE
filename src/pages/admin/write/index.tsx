import { Container } from "./index.styles";
import { useSearchParams } from "react-router-dom";
import TopBar from "@/components/topbar/TopBar";

const WritePage = () => {
  const [searchParams] = useSearchParams();
  // 공지사항 글쓰기와 분실물 글쓰기를 url 쿼리 파라미터로 분리
  const type = searchParams.get("type"); // 'notice' or 'lost'
  const isNotice = type === "notice";

  return (
    <Container>
      <TopBar
        showBackButton={true}
        title={isNotice ? "공지사항 작성" : "분실물 등록"}
      />
    </Container>
  );
};
export default WritePage;
