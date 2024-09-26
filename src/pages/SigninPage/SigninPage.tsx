import { useState } from "react";
import { Button } from "../../components/Button/Button";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import InputForm from "../../components/InputForm/InputForm";
import { ModalLogo } from "../../components/ModalLogo/ModalLogo";
import { ModalWrapper } from "../../components/ModalWrapper/ModalWrapper";
import { path } from "../../paths";
import { authUser } from "../../api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { getErrorText } from "../../utils/getErrorText";

export function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();

  const {loginUser} = useUser();

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: (state: string) => void
  ) => {
    setState(e.target.value);
  };
  const handlerLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const user = await authUser({ email, password });
      localStorage.setItem("user", JSON.stringify(user));
      loginUser(user);
      navigate(path.HOME);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Firebase: Error (auth/invalid-credential).') {
          setErrorText(error.message);
        }
        error && getErrorText({errorName: error.message, setError: setError});
      }
    }
  };
  return (
    <ModalWrapper>
      <ModalLogo>
        <div className="mb-[34px]">
          <InputForm
            onChange={(e) => onChangeInput(e, setEmail)}
            placeholder="Логин"
          />
          <InputForm
            onChange={(e) => onChangeInput(e, setPassword)}
            placeholder="Пароль"
          />
          {errorText ? (
            <p className="text-rose-500 text-center mt-1">
              Пароль введен не верно.
              <Link to={path.RESET} className="underline cursor-custom">
                Восстановить пароль?
              </Link>
            </p>
          ) : (<p className="text-rose-500 mt-1 text-center">{error}</p>)}
        </div>

        <div className="space-y-2.5">
          <Button onClick={handlerLogin} title="Войти" />
          <ButtonLink link={path.SIGNUP} title="Зарегистрироваться" />
        </div>
      </ModalLogo>
    </ModalWrapper>
  );
}
