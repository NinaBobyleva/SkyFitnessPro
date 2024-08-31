import { Link } from "react-router-dom";

export function ModalLogo({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[100%]">
      <div className="mx-auto px-[calc(50%-(366px/2))]">
        <form
          className="w-[337px] md:w-[366px] bg-[#FFFFFF] rounded-[30px] px-[31px] md:px-[40px] py-[40px]"
          action="#"
        >
          <Link to="/">
            <img
              src="/img/logo_modal.png"
              alt="logo"
              className="mb-12 mx-auto w-auto h-auto"
            />{" "}
          </Link>
          {children}
        </form>
      </div>
    </div>
  );
}