import CheckModal from "@/components/modal/checkModal/CheckModal";

interface WaitingClosedModalProps {
  onClose: () => void;
  message: string;
}

export default function WaitingClosedModal({
  onClose,
  message,
}: WaitingClosedModalProps) {
  return (
    <CheckModal
      title="안내"
      content={message}
      onClose={onClose}
    />
  );
}
