import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoBMU2UVxLe6oCR5YYGykkrYT08qgrYxQ",
  authDomain: "ecommerce-react-7535c.firebaseapp.com",
  projectId: "ecommerce-react-7535c",
  storageBucket: "ecommerce-react-7535c.firebasestorage.app",
  messagingSenderId: "699826603997",
  appId: "1:699826603997:web:5bf9ba0cfdea328eecd834"
};

export const app = initializeApp(firebaseConfig);