import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function getUserData(uid) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const initialData = {
      cart: [],
      wishlist: [],
      compare: [],
    };
    await setDoc(ref, initialData);
    return initialData;
  }

  const data = snap.data();

  return {
    cart: data.cart || [],
    wishlist: data.wishlist || [],
    compare: data.compare || [],
  };
}

export async function saveUserData(uid, { cart, wishlist, compare }) {
  const ref = doc(db, "users", uid);

  const payload = {
    cart: cart || [],
    wishlist: wishlist || [],
    compare: compare || [],
  };

  await setDoc(ref, payload, { merge: true });
}
