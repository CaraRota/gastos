import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";

export const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        const idToken = await res.user.getIdToken();
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/google`, {
            idToken,
        });
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Error al iniciar sesion con Google");
    }
};
