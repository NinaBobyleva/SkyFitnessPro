import { Link } from "react-router-dom";
import logoImg from "/public/img/logo.svg";
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import { path } from "../../paths";
import UserModal from "../UserModal/UserModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between mx-auto py-10 md:pt-[50px] md:pb-14 lg:max-w-[1440px] px-4 md:px-8 main:px-[140px]">
      <div>
        <Link to={'/'}>
          <img src={logoImg} alt="logo" className="w-[220px] h-[35px]" />
        </Link>
        <p className="font-roboto-400 text-lg hidden md:block pt-3.5 text-[#585959]">
          Онлайн-тренировки для занятий дома
        </p>
      </div>
      {user ? (
        <>
          <div className="relative">
            <div
              onClick={toggleDropdown}
              className="relative top-0 left-0 flex flex-row justify-end gap-4 md:justify-between items-center h-[35px] md:h-[50px]"
            >
              <div className=" w-[36px] h-[36px] lg:w-[42px] lg:h-[42px] bg-user-icon bg-cover  bg-no-repeat bg-center" />
              <div className="flex items-center">
              <img src={user.photoURL || '/public/img/user-icon.svg'} alt="Аватар пользователя" className="w-10 h-10 rounded-full mr-2" />
                <p className="hidden md:block text-2x1  font-roboto-400 pr-[11px]">
                  {user.email}
                </p>
                <svg className={
                  isOpen
                    ? 'w-[14px] h-[9px] rotate-180 cursor-сustom'
                    : 'w-[14px] h-[9px] cursor-custom'
                } id="icon-arrow" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs />
                  <path id="Rectangle 3765" d="M12.06 0.74L5.67 7.12L-0.71 0.74L0.7 -0.68L6.38 5L5.67 5.71L4.97 5L10.64 -0.68L12.06 0.74Z" fill="#000000" fillOpacity="1.000000" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            {isOpen && <UserModal toggleDropdown={toggleDropdown} user={user} email={user?.email || ''} onClose={() =>setIsOpen(false)}/>}
          </div>
        </>
      ) : (
        <div className="w-[83px] md:w-[103px]">
          <Link to={path.LOGIN}>
            <ButtonHeader title="Войти" />
          </Link>
        </div>
      )}
    </div>
  );
}

