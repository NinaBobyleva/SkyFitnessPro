import { useState } from "react";
import { Button } from "../../components/Button/Button";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import InputForm from "../../components/InputForm/InputForm";
import { ModalLogo } from "../../components/ModalLogo/ModalLogo";
import { ModalWrapper } from "../../components/ModalWrapper/ModalWrapper";
import { path } from "../../paths";
import { createUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { getErrorText } from "../../utils/getErrorText";

export function SignupPage() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>, setState: (state:string) => void) => {
    setState(e.target.value)
  }
  const handlerRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!email || !password || !repeatPass) {
        return setError('Заполните все поля');
      }
      if (password !== repeatPass) {
        return setError('Пароли не совпадают');
      }
      await createUser({email, password, name: email});
      navigate(path.LOGIN);
    } catch (error) {
      if(error instanceof Error){
        error && getErrorText({errorName: error.message, setError: setError});
      }
    }
  }
  return (
    <ModalWrapper>
      <ModalLogo>
        <div className="mb-[34px]">
          <InputForm value={email} onChange={(e)=> onChangeInput(e, setEmail)} type="email" placeholder="Эл. почта" />
          <InputForm value={password} onChange={(e)=> onChangeInput(e, setPassword)} type="password" placeholder="Пароль" />
          <InputForm value={repeatPass} onChange={(e)=> onChangeInput(e, setRepeatPass)} type="password" placeholder="Повторить пароль" />
          <p className="text-rose-500 mt-1 text-center">{error}</p>
        </div>

        <div className="space-y-2.5">
          <Button onClick={handlerRegister} title="Зарегистрироваться" />
          <ButtonLink link={path.LOGIN} title="Войти" />
        </div>
      </ModalLogo>
    </ModalWrapper>
  );
}
