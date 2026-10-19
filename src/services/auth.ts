import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../firebase";

export async function registerUser(
  name: string,
  email: string,
  password: string,
) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, { displayName: name });
  await user.getIdToken(true);
}

export const loginUser = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutUser = () => signOut(auth);

const messages: Record<string, string> = {
  "auth/email-already-in-use": "This email is already registered",
  "auth/invalid-credential": "Invalid email or password",
  "auth/invalid-email": "Enter a valid email",
  "auth/weak-password": "Password must be at least 6 characters",
  "auth/too-many-requests": "Too many attempts. Try again later",
  "auth/network-request-failed": "Network error. Check your connection",
};

export function getAuthErrorMessage(error: unknown) {
  if (error instanceof FirebaseError) {
    return messages[error.code] ?? "Something went wrong. Try again";
  }
  return "Something went wrong. Try again";
}
