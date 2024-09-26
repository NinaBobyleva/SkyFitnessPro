import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const updateDisplayName = async (newName: string, setDisplayName: (name: string) => void) => {
  const database = getDatabase();
  const auth = getAuth();
  if (auth.currentUser) {
    await set(ref(database, `users/${auth.currentUser.uid}/displayName`), newName);
  }
  setDisplayName(newName);
}