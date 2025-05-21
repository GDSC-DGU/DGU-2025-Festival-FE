import { ContentInput, ContentLength } from "../index.styles";
import { useState } from "react";

const NoticeForm = () => {
  const [content, setContent] = useState("");
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 300) {
      setContent(e.target.value);
    }
  };

  return (
    <>
      <ContentInput
        placeholder="공지사항 내용을 입력하세요."
        value={content}
        onChange={handleContentChange}
      />
      <ContentLength>{`${content.length}/300`}</ContentLength>
    </>
  );
};

export default NoticeForm;
