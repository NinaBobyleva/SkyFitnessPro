import { Link } from "react-router-dom";
import logoImg from "/public/img/logo.svg";
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import { path } from "../../paths";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

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
        <Link to="/">
          <img src={logoImg} className="w-[220px] h-[35px]" alt="логотип" />
        </Link>
        <p className="font-roboto-400 text-lg hidden md:block pt-3.5 text-[#585959]">
          Онлайн-тренировки для занятий дома
        </p>
      </div>

      {user ? (
        <div className="flex items-center">
          <img src={user.photoURL || '/public/img/user-icon.svg'} alt="Аватар пользователя" className="w-10 h-10 rounded-full mr-2" />
          <div className="flex flex-col">
            <p className="font-bold text-gray-800 hidden md:block">{user.displayName}</p>
            <p className="text-gray-500 hidden md:block">{user.email}</p>
          </div>
        </div>
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