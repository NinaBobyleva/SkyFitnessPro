import { Link } from 'react-router-dom';
import logoImg from '../../../public/img/logo.svg';

export type ResetModalType = {
  children: JSX.Element[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function ResetModal({ children, onSubmit }: ResetModalType) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="mx-auto max-w-[100%]">
        <div className="mx-auto px-[calc(50%-(366px/2))]">
          <form
            className="w-[337px] md:w-[366px] bg-[#FFFFFF] rounded-[30px] px-[31px] md:px-[40px] py-[40px]"
            action="#"
            onSubmit={(event) => onSubmit(event)}
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
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetModal;

