type ErrorProp = {
  errorName: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

export function getErrorText({ errorName, setError }: ErrorProp) {
  switch (errorName) {
    case "Firebase: Password should be at least 6 characters (auth/weak-password).":
      setError("Слабый пароль: пароль должен быть не менее шести символов");
      break;
    case "Firebase: Error (auth/email-already-in-use).":
      setError("Данная почта уже используется. Попробуйте войти");
      break;
    case "Firebase: Error (auth/invalid-email).":
      setError("Указанная почта некорректна, укажите другую");
      break;
    case "Firebase: Error (auth/operation-not-allowed).":
      setError("Учетные записи электронной почты и паролей не включены");
      break;
    default:
      setError("Что-то пошло не так");
      break;
  }
}
