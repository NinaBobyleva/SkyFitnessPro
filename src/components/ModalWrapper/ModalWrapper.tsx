import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { path } from "../../paths";

export function ModalWrapper({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  
  return createPortal (
    <div className="w-full h-full bg-black bg-opacity-20 fixed z-20 left-[0px] top-[0px]">
      <div onClick={() => navigate(path.HOME)} className="w-[100%] h-[100%]"></div>
      {children}
    </div>,
    document.getElementById('modal')!,
  );
}
