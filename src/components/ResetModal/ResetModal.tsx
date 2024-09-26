import { Link } from 'react-router-dom';
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

import logoImg from '../../../public/img/logo.svg';

export type ResetModalType = {
  children: JSX.Element | JSX.Element[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function ResetModal({ children, onSubmit }: ResetModalType) {
  return (
    <ModalWrapper>
      <form
        className="w-[337px] md:w-[366px] bg-[#FFFFFF] rounded-[30px] px-[31px] md:px-[40px] py-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onSubmit={onSubmit}
      >
        <Link to="/">
          <img
            src={logoImg}
            alt="logo"
            width={222}
            height={35}
            className="mb-12 mx-auto w-auto h-auto"
          />
        </Link>
        <div className="space-y-4">{children}</div>
      </form>
    </ModalWrapper>
  );
}

export default ResetModal;