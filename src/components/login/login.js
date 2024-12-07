export function validateLogin(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username);

    if (user && user.password === password) {
        alert("Login bem-sucedido!");
        window.location.href = "../home/home.html";
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
}
