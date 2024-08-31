import InputForm from "../../components/InputForm/InputForm";
import { ModalLogo } from "../../components/ModalLogo/ModalLogo";
import { ModalWrapper } from "../../components/ModalWrapper/ModalWrapper";

export function LoginPage() {
  return (
    <div className=" bg-transparent">
      <ModalWrapper>
        <ModalLogo>
          <div className="mb-[34px]">
            <InputForm />
          </div>
        </ModalLogo>
      </ModalWrapper>
    </div>
  );
}
