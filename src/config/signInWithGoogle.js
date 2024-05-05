import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log("this is the result", result);

        // The signed-in user info.
        const user = result.user;
        console.log(user);
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = error.credential;
        console.error(error);
    }
};
