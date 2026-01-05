// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyANIvbkbys8q2O-FPyFyDM8euF6wYovMVI",
  authDomain: "chavier-web-midia.firebaseapp.com",
  projectId: "chavier-web-midia",
  storageBucket: "chavier-web-midia.firebasestorage.app",
  messagingSenderId: "813558483226",
  appId: "1:813558483226:web:1300abfc073ec4728204a3"
};
// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Exporta para usar nos outros arquivos
export { auth, provider };
