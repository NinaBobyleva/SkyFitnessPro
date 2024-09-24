import { User } from "firebase/auth";
import { createContext, ReactNode, useContext, useState } from "react";

export type UserContextValue = {
  user: User | null;
  loginUser: (userData: User) => void;
};

export const UserContext = createContext<UserContextValue | null>(null);

type UserProviderProps = {
  children: ReactNode;
};

const userData = localStorage.getItem("user");
const currentUser = userData ? JSON.parse(userData) : null;

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(currentUser);
  console.log(user);

  const loginUser = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <UserContext.Provider value={{ user, loginUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("useCurrentTrack должен использоваться внутри провайдера");
  }

  return userContext;
}
