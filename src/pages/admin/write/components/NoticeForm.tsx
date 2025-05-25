import { ContentInput, ContentLength } from "../index.styles";

interface NoticeFormProps {
  content: string;
  setContent: (value: string) => void;
}

const NoticeForm = ({ content, setContent }: NoticeFormProps) => {
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
      <ContentLength>{`${content?.length ?? 0}/300`}</ContentLength>
    </>
  );
};

export default NoticeForm;
