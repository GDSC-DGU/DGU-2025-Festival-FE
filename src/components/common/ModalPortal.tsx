import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

interface ModalPortalProps {
  children: ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const el = document.getElementById('modal-root');
  return el ? createPortal(children, el) : null;
}
