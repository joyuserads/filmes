// Simulação de credenciais ja que não estamos usando banco de dados

const validUser = "Admin";
const validPass = "admin123";

// Verificação de Login
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorText = document.getElementById('loginError');

    if (username === validUser && password === validPass) {
        // Login bem-sucedido
        window.location.href = "index.html";
    } else {
        errorText.textContent = "Usuário ou senha inválidos.";
    }


    
}