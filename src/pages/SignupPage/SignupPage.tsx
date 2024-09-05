import { Button } from "../../components/Button/Button";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import InputForm from "../../components/InputForm/InputForm";
import { ModalLogo } from "../../components/ModalLogo/ModalLogo";
import { ModalWrapper } from "../../components/ModalWrapper/ModalWrapper";
import { path } from "../../paths";

export function SignupPage() {
  return (
    <ModalWrapper>
      <ModalLogo>
        <div className="mb-[34px]">
          <InputForm placeholder="Эл. почта" />
          <InputForm placeholder="Пароль" />
          <InputForm placeholder="Повторить пароль" />
        </div>

        <div className="space-y-2.5">
          <Button title="Зарегистрироваться" />
          <ButtonLink link={path.LOGIN} title="Войти" />
        </div>
      </ModalLogo>
    </ModalWrapper>
  );
}
