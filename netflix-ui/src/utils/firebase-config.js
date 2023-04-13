import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtkNm3jKUeQIdT6Gp4prXMIQ1hOFXlRAg",

  authDomain: "react-netflix-clone-fadeb.firebaseapp.com",

  projectId: "react-netflix-clone-fadeb",

  storageBucket: "react-netflix-clone-fadeb.appspot.com",

  messagingSenderId: "408499433167",

  appId: "1:408499433167:web:bb42b3ecb3bf55ea94d1ba",

  measurementId: "G-YXLHH8X033",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
