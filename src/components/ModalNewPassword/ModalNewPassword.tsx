import { Link } from "react-router-dom";

type ModalNewPasswordProps = {
  email: string;
};

export default function ModalNewPassword({
  email,
}: ModalNewPasswordProps): React.JSX.Element {
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
              className="w-[220px] h-[35px] mb-5 mx-auto"
              alt="logo"
            />
          </Link>
          <p className="text-[18px] text-black font-Roboto-400 text-center">
            Ссылка для востановления <br /> пароля отправлена на <br /> {email}
          </p>
        </form>
      </div>
    </div>
  );
}
