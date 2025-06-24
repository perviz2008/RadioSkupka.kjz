
const auth = firebase.auth();

// Авторизация
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "home.html"; // Переход после входа
    })
    .catch(error => {
      alert(error.message);
    });
}

// Регистрация
function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "home.html"; // Переход после регистрации
    })
    .catch(error => {
      alert(error.message);
    });
}
