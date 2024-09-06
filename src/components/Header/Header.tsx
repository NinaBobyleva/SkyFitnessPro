import { Link, useNavigate } from "react-router-dom";
import logoImg from "/public/img/logo.svg";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import { path } from "../../paths";

export default function Header() {
  const navigate = useNavigate();

  const toggleLoginForm = () => {
    navigate(path.LOGIN);
  };

  return (
    <div className="relative">
      <div className="absolute top-[50px] left-[30px]">
        <Link to="/">
          <img src={logoImg} className="w-[220px] h-[35px]" alt="logo" />
        </Link>
        <p className="font-roboto-400 text-lg hidden md:block pt-3.5 text-[#585959]">
          Онлайн-тренировки для занятий дома
        </p>
      </div>

      <div className="absolute top-0 right-0 p-10">
        <ButtonHeader title="Войти" onClick={toggleLoginForm} />
      </div>
    </div>
  );
}
