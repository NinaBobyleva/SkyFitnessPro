import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResetModal from '../../components/ResetModal/ResetModal';
import InputForm from '../../components/InputForm/InputForm';
import { getAuth, updatePassword } from "firebase/auth";
import { app } from '../../api/firebaseConfig';
import { Button } from '../../components/Button/Button';
import { ChangePasswordType } from '../../types';

export default function ResetPage() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const [error, setError] = useState('');
  const [newPassword, setNewPassword] = useState<ChangePasswordType>({
    password: '',
    repeatPassword: '',
  });

  const handleUpdatePassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newPassword.password.length < 6) {
      return setError('Длинна пароля не менее 6 символов');
    }
    if (!newPassword.password) {
      return setError('Введите пароль');
    }
    if (!newPassword.repeatPassword) {
      return setError('Повторите пароль');
    }
    if (newPassword.password !== newPassword.repeatPassword) {
      return setError('Пароли не совпадают');
    }

    const currentUser = auth.currentUser;

    if (currentUser !== null) {
      try {
        await updatePassword(currentUser, newPassword.password);
        navigate('/profile');
      } catch (error) {
        setError('Произошла ошибка при обновлении пароля. Попробуйте еще раз.');
      }
    }
  };

  return (
    <ResetModal onSubmit={handleUpdatePassword}>
      <div className="mb-[34px]">
        <InputForm
          onChange={e =>
            setNewPassword({ ...newPassword, password: e.target.value })
          }
          value={newPassword.password}
          type="password"
          name="password"
          placeholder="Новый пароль"
        />

        <InputForm
          onChange={e =>
            setNewPassword({ ...newPassword, repeatPassword: e.target.value })
          }
          value={newPassword.repeatPassword}
          type="password"
          name="password"
          placeholder="Повторите пароль"
        />
        <p className="text-red mb-[4px] text-center">{error ? error : ''}</p>
      </div>
      <div className="space-y-2.5">
        <Button title="Подтвердить" type="submit" />
      </div>
    </ResetModal>
  );
}