import { useState } from "react";
import { Button } from "../../components/Button/Button";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import InputForm from "../../components/InputForm/InputForm";
import { ModalLogo } from "../../components/ModalLogo/ModalLogo";
import { ModalWrapper } from "../../components/ModalWrapper/ModalWrapper";
import { path } from "../../paths";
import { authUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);
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
      // if (error) {
      //   return setError(true);
      // }
      if (error instanceof Error) {
        console.log(error.message);
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
          {/* {error && (
            <p className="text-rose-500 text-center mt-1">
              Логин и пароль не совпадают.
              <span className="underline cursor-custom">
                Восстановить пароль?
              </span>
            </p>
          )} */}
        </div>

        <div className="space-y-2.5">
          <Button onClick={handlerLogin} title="Войти" />
          <ButtonLink link={path.SIGNUP} title="Зарегистрироваться" />
        </div>
      </ModalLogo>
    </ModalWrapper>
  );
}
