import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import InputForm from "../../components/InputForm/InputForm";
import { ModalLogo } from "../../components/ModalLogo/ModalLogo";
import { ModalWrapper } from "../../components/ModalWrapper/ModalWrapper";
import { path } from "../../paths";
import { createUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>, setState: (state:string) => void) => {
    setState(e.target.value)
  }
  const handlerRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await createUser({email, password, name: email});
      navigate(path.LOGIN);
    } catch (error) {
      if(error instanceof Error){
        console.log(error.message)
      }
    }
  }
  return (
    <ModalWrapper>
      <ModalLogo>
        <div className="mb-[34px]">
          <InputForm value={email} onChange={(e)=> onChangeInput(e, setEmail)} placeholder="Эл. почта" />
          <InputForm value={password} onChange={(e)=> onChangeInput(e, setPassword)} placeholder="Пароль" />
          <InputForm value={repeatPass} onChange={(e)=> onChangeInput(e, setRepeatPass)} placeholder="Повторить пароль" />
        </div>

        <div className="space-y-2.5">
          <Button onClick={handlerRegister} title="Зарегистрироваться" />
          <ButtonLink link={path.LOGIN} title="Войти" />
        </div>
      </ModalLogo>
    </ModalWrapper>
  );
}
