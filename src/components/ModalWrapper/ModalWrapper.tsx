import { createPortal } from "react-dom";

export function ModalWrapper({ children, modalRef }: { children: React.ReactNode,  modalRef: React.MutableRefObject<HTMLDivElement | null> }) {
  
  return createPortal (
    <div className="w-full h-full bg-black bg-opacity-20 fixed left-[0px] top-[0px]">
      {children}
    </div>,
    document.getElementById('modal')!,
  );
}
