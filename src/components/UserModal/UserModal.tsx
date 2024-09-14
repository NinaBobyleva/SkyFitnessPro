import { useLogout } from '../../hooks/useLogout';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { User } from 'firebase/auth';
import { useState } from 'react';

type UserModalType = {
  user: User | null;
  email: string | null;
  onClose: () => void;
  toggleDropdown: () => void;
};

export default function UserModal({
  toggleDropdown,
  user,
  email,
}: UserModalType) {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      navigate('/');
      console.log('Успешный выход');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
      setError('Ошибка при выходе из системы');
    } finally {
      setLoading(false);
      toggleDropdown();
    }
  };

  const userName = user?.email?.split('@')[0];

  return (
    <div className="absolute right-0 z-20 mt-3 md:mt-6 bg-white rounded-[30px] w-[266px] h-[258px] flex flex-col items-center gap-8">
      <div className="w-[206px] flex flex-col gap-2.5 text-center mt-[24px]">
        <p className="font-roboto-400 text-lg">{userName}</p>
        <p className="font-roboto-400 text-lg text-[gray]">{email}</p>
      </div>
      <div className="w-[206px] flex flex-col gap-2.5">
        <Button
          title="Мой профиль"
          onClick={() => {
            navigate('/profile');
            toggleDropdown();
          }}
        />
        <button
          className="rounded-full border border-black w-full h-[52px] px-5 bg-transparent text-lg text-[#000000] hover:bg-[#F7F7F7] active:bg-[#E9ECED] cursor-custom"
          onClick={handleLogout}
          disabled={loading}
        >
          {loading ? 'Выход...' : 'Выйти'}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}



