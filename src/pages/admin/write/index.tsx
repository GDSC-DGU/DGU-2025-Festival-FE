import {
  Container,
  PostContainer,
  TitleContainer,
  Divider,
  TitleInput,
  DateText,
  ImageContainer,
  PlaceholderText,
  ScrollWrapper,
  ImagePreview,
  UploadInput,
  ImagePreviewWrapper,
  DeleteButton,
  AddButtonOverlay,
} from "./index.styles";
import TopBar from "@/components/topbar/TopBar";
import BottomButton from "./components/BottomButton/BottomButton";
import ImagePagination from "@/pages/notice-detail/components/ImagePagination/ImagePagination";
import CompleteModal from "./components/CompleteModal/ComplateModal";
import NoticeForm from "./components/NoticeForm";
import LostForm from "./components/LostForm";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useMatch,
} from "react-router-dom";
import { formatDate } from "@/utils/date";
import { useState, useRef, useLayoutEffect, useEffect } from "react";

const WritePage = () => {
  const isEditMode = useMatch("/admin/edit/:id") !== null;
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const isNotice = type === "notice";
  const maxImageCount = 5;
  const now = new Date();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [inputKey, setInputKey] = useState(0);
  const [shouldScrollToEnd, setShouldScrollToEnd] = useState(false);
  const [title, setTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      // fetch 내용 세팅
    }
  }, [id]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollX = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    const index = Math.round(scrollX / width);
    setPageIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    if (shouldScrollToEnd && scrollRef.current) {
      const lastIndex = images.length - 1;
      scrollToIndex(lastIndex);
      setPageIndex(lastIndex);
      setShouldScrollToEnd(false);
    }
  }, [shouldScrollToEnd, images.length]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const limitedFiles = fileArray.slice(0, maxImageCount - images.length);
    e.target.value = "";

    Promise.all(
      limitedFiles.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    ).then((newImages) => {
      const newImageList = [...images, ...newImages];
      setImages(newImageList);
      setShouldScrollToEnd(true);
      setInputKey((prev) => prev + 1);
    });
  };

  const handleImageClick = () => {
    if (images.length >= maxImageCount) return;
    fileInputRef.current?.click();
  };

  const handleDeleteImage = (index: number) => {
    setImages((prev) => {
      const newList = prev.filter((_, i) => i !== index);
      const newIndex = Math.max(0, Math.min(pageIndex, newList.length - 1));
      setPageIndex(newIndex);
      setTimeout(() => scrollToIndex(newIndex), 0);
      return newList;
    });
  };

  const handleSubmit = () => {
    // 전송 로직
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/admin/notice");
  };

  const handleGoToPage = () => {
    const mockId = 1;
    navigate(
      isNotice ? `/admin/notice/${mockId}` : `/admin/notice/lost/${mockId}`
    );
  };

  return (
    <Container>
      <TopBar
        showBackButton
        title={
          isNotice
            ? isEditMode
              ? "공지사항 수정"
              : "공지사항 등록"
            : isEditMode
              ? "분실물 수정"
              : "분실물 등록"
        }
      />
      <PostContainer>
        <TitleContainer>
          <TitleInput
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DateText>{formatDate(now)}</DateText>
        </TitleContainer>
        <Divider />
        <ImageContainer>
          <UploadInput
            key={inputKey}
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />
          {images.length === 0 ? (
            <PlaceholderText onClick={handleImageClick}>
              이미지 추가하기
            </PlaceholderText>
          ) : (
            <>
              <ScrollWrapper ref={scrollRef} onScroll={handleScroll}>
                {images.map((img) => (
                  <ImagePreviewWrapper key={img}>
                    <ImagePreview src={img} alt="preview" />
                    <DeleteButton
                      onClick={() => handleDeleteImage(images.indexOf(img))}
                    >
                      ✕
                    </DeleteButton>
                  </ImagePreviewWrapper>
                ))}
              </ScrollWrapper>
              {images.length < maxImageCount && (
                <AddButtonOverlay onClick={handleImageClick}>
                  이미지 추가하기
                </AddButtonOverlay>
              )}
            </>
          )}
        </ImageContainer>
        {images.length > 0 && (
          <ImagePagination
            total={images.length}
            current={Math.min(pageIndex, images.length - 1)}
            onDotClick={scrollToIndex}
          />
        )}

        {isNotice ? <NoticeForm /> : <LostForm />}
      </PostContainer>

      <BottomButton
        title={isEditMode ? "수정하기" : "입력하기"}
        onClick={handleSubmit}
      />
      {isModalOpen && (
        <CompleteModal onClose={handleCloseModal} onNavigate={handleGoToPage} />
      )}
    </Container>
  );
};

export default WritePage;
