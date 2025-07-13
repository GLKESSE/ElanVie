document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const type = document.getElementById('accountType').value;
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push({ fullName, email, password, type });
  localStorage.setItem('users', JSON.stringify(users));
  alert("Compte créé avec succès ! Vous pouvez vous connecter.");
  window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    alert("Connexion réussie : " + user.fullName);
    window.location.href = "index.html";
  } else {
    alert("Email ou mot de passe incorrect.");
  }
});
