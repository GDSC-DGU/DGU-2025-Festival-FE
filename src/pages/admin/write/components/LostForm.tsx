import {
  ContentInput,
  ContentLength,
  InputGroup,
  FieldInput,
  FieldWrapper,
  Label,
  Select,
  SelectWrapper,
  ArrowIcon,
} from "../index.styles";
import { LostTag } from "@/types/enums";

export interface LostFormData {
  tag?: LostTag;
  color: string;
  category: string;
  brand: string;
  location: string;
  content: string;
}

export interface LostFormProps {
  form: LostFormData;
  setForm: React.Dispatch<React.SetStateAction<LostFormData>>;
}

const LostForm = ({ form, setForm }: LostFormProps) => {
  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 300) {
      handleChange("content", e.target.value);
    }
  };

  return (
    <>
      <InputGroup>
        <FieldWrapper>
          <Label>태그</Label>
          <SelectWrapper>
            <Select
              value={form.tag ?? ""}
              onChange={(e) => handleChange("tag", e.target.value as LostTag)}
            >
              <option value="" disabled>
                태그를 선택하세요
              </option>
              {Object.entries(LostTag).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </Select>
            <ArrowIcon>▼</ArrowIcon>
          </SelectWrapper>
        </FieldWrapper>

        <FieldWrapper>
          <Label>색상</Label>
          <FieldInput
            placeholder="예) 빨간색"
            value={form.color}
            onChange={(e) => handleChange("color", e.target.value)}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>카테고리</Label>
          <FieldInput
            placeholder="예) 우산, 지갑, 핸드폰"
            value={form.category}
            onChange={(e) => handleChange("category", e.target.value)}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>브랜드</Label>
          <FieldInput
            placeholder="예) Nike, Samsung"
            value={form.brand}
            onChange={(e) => handleChange("brand", e.target.value)}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>분실 장소</Label>
          <FieldInput
            placeholder="예) 중앙도서관, 학생회관"
            value={form.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </FieldWrapper>
      </InputGroup>

      <FieldWrapper>
        <Label>특징 / 상세 설명</Label>
        <ContentInput
          placeholder="분실물에 대한 설명을 작성하세요."
          value={form.content}
          onChange={handleContentChange}
        />
        <ContentLength>{`${form.content?.length ?? 0}/300`}</ContentLength>
      </FieldWrapper>
    </>
  );
};

export default LostForm;
