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
import {
  NoticePostAPI,
  NoticeDetailAPI,
  NoticePatchAPI,
} from "@/api/notice/notice";
import { useNoticeStore } from "@/stores/useNoticeStore";

const WritePage = () => {
  const isEditMode = useMatch("/admin/edit/:id") !== null;
  const { id: idParam } = useParams();
  const id = idParam ? Number(idParam) : undefined;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const isNotice = type === "notice";
  const maxImageCount = 5;
  const now = new Date();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<string[]>([]); // 미리보기용
  const [imageFiles, setImageFiles] = useState<File[]>([]); // 전송용
  const [pageIndex, setPageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [inputKey, setInputKey] = useState(0);
  const [shouldScrollToEnd, setShouldScrollToEnd] = useState(false);
  const [title, setTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState("");

  const { noticeDetail } = useNoticeStore();

  useEffect(() => {
    const fetchData = async () => {
      if (isEditMode && id) {
        try {
          await NoticeDetailAPI(id);
        } catch (_error) {
          navigate("/admin/notice");
        }
      }
    };
    fetchData();
  }, [id, isEditMode]);

  useEffect(() => {
    if (isEditMode && noticeDetail) {
      setTitle(noticeDetail.notice_title);
      setDescription(noticeDetail.notice_content);
      const urls = noticeDetail.image_urls.map((img) => img.notice_image_url);
      setImages(urls);
    }
  }, [noticeDetail, isEditMode]);

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

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    imageFiles.forEach((file) => {
      formData.append("images", file); // 서버가 'images'라는 키로 받는다고 가정
    });

    try {
      let response: { success: boolean } | undefined;
      response = { success: false };
      if (isNotice) {
        if (isEditMode && id !== undefined) {
          formData.append("noticeId", id.toString());
          response = await NoticePatchAPI(formData);
        } else {
          response = await NoticePostAPI(formData);
        }
      } else {
        // await LostPostAPI(payload);
      }

      if (response.success || typeof response === "string") {
        setIsModalOpen(true);
      } else {
        alert("게시에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (err) {
      console.error("게시 실패:", err);
      alert("게시에 실패했습니다. 다시 시도해주세요.");
    }
  };

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
    ).then((newPreviews) => {
      setImages((prev) => [...prev, ...newPreviews]);
      setImageFiles((prev) => [...prev, ...limitedFiles]);
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

    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/admin/notice");
  };

  const isFormValid = title.trim() !== "" && description.trim() !== "";

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

        {isNotice ? (
          <NoticeForm content={description} setContent={setDescription} />
        ) : (
          <LostForm />
        )}
      </PostContainer>

      <BottomButton
        title={isEditMode ? "수정하기" : "입력하기"}
        onClick={handleSubmit}
        disabled={!isFormValid}
      />
      {isModalOpen && <CompleteModal onClose={handleCloseModal} />}
    </Container>
  );
};

export default WritePage;
