import { createPortal } from "react-dom";

export function ModalWrapper({ children }: { children: React.ReactNode }) {
  
  return createPortal (
    <div className="w-full h-full bg-black bg-opacity-20 fixed left-[0px] top-[0px]">
      {children}
    </div>,
    document.getElementById('modal')!,
  );
}
