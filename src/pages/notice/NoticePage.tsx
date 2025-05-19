import TopBar from "@/components/topbar/TopBar";
import Toggle from "@/components/toggle/Toggle";
import { useState } from "react";

const NoticePage = () => {
  const [isLeftSelected, setIsLeftSelected] = useState<boolean>(true);
  return (
    <div>
      <TopBar title="공지사항 및 분실물" />
      <Toggle
        options={["공지사항", "분실물"]}
        isLeftSelected={isLeftSelected}
        setIsLeftSelected={setIsLeftSelected}
      />
    </div>
  );
};

export default NoticePage;
