// // import { async } from "@firebase/util";
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { app } from "./firebaseConfig";

// const auth = getAuth(app);

// const googleProvider = new GoogleAuthProvider();

// export const signInWithSocial = async () => {
//   const response = await signInWithPopup(auth, googleProvider);
//   return response.user;
// };

// // signInWithPopup(auth, googleProvider)
// // .then((result) => {
// //   // This gives you a Google Access Token. You can use it to access the Google API.
// //   const credential = GoogleAuthProvider.credentialFromResult(result);
// //   const token = credential.accessToken;
// //   // The signed-in user info.
// //   const user = result.user;
// //   // ...
// // })
// // .catch((error) => {
// //   // Handle Errors here.
// //   const errorCode = error.code;
// //   const errorMessage = error.message;
// //   // The email of the user's account used.
// //   const email = error.customData.email;
// //   // The AuthCredential type that was used.
// //   const credential = GoogleAuthProvider.credentialFromError(error);
// //   // ...
// // });
