import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "./firebase";

const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Usuario logeado:", user.displayName);
  } catch (error) {
    console.error(error);
  }
};
