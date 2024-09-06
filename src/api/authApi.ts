import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "./firebaseConfig";
import { signOut, updateProfile } from "firebase/auth";

type createUserType = {
    email: string;
    password: string;
    name: string;
}


export const createUser = async ({email, password, name}: createUserType) => {
    const signUp = await createUserWithEmailAndPassword(auth, email, password)
    const user = signUp.user
    await updateProfile(user, {displayName: name})
    await signOut(auth)
    return user
}

export const authUser = async ({email, password}: Omit<createUserType, 'name'>) => {
    const signIn = await createUserWithEmailAndPassword(auth, email, password)
    const user = signIn.user
    return user
}