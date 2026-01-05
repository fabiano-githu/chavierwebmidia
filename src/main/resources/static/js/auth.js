// auth.js
import { auth, provider } from './firebaseConfig.js';
import { signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Elementos do DOM
const loginBtn = document.getElementById('loginGoogle');
const logoutBtn = document.getElementById('logout');
const loginItem = document.getElementById('login-item');
const logoutItem = document.getElementById('logout-item');
const avatar = document.getElementById('avatar');

// Observa mudanças de autenticação
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Logado → mostrar apenas "Sair"
        loginItem.style.display = 'none';
        logoutItem.style.display = 'block';
        avatar.src = user.photoURL || '/img/3541871.png';
    } else {
        // Deslogado → mostrar apenas "Entrar"
        loginItem.style.display = 'block';
        logoutItem.style.display = 'none';
        avatar.src = '/img/3541871.png';
    }
});

// Login com Google
loginBtn.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => console.log("Usuário logado:", result.user.displayName))
        .catch((err) => console.error(err));
});

// Logout
logoutBtn.addEventListener('click', () => {
    signOut(auth)
        .then(() => console.log("Usuário deslogado"))
        .catch((err) => console.error(err));
});
