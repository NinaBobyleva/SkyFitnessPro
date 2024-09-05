import { Button } from "../../components/Button/Button";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import InputForm from "../../components/InputForm/InputForm";
import { ModalLogo } from "../../components/ModalLogo/ModalLogo";
import { ModalWrapper } from "../../components/ModalWrapper/ModalWrapper";
import { path } from "../../paths";

export function SigninPage() {
  return (
    <ModalWrapper>
      <ModalLogo>
        <div className="mb-[34px]">
          <InputForm placeholder="Логин" />
          <InputForm placeholder="Пароль" />
        </div>

        <div className="space-y-2.5">
          <Button title="Войти" />
          <ButtonLink link={path.SIGNUP} title="Зарегистрироваться" />
        </div>
      </ModalLogo>
    </ModalWrapper>
  );
}
