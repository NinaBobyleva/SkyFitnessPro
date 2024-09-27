import { auth } from "../api/firebaseConfig";

export const useLogout = () => {
  const logout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('user'); // Очистка localStorage
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  return { logout };
};