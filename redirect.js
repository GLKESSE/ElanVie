// Redirection automatique selon le type d'utilisateur
const user = {
  nom: "KOUASSI Adjoua",
  type: "professionnel" // ou "patient"
};

document.addEventListener("DOMContentLoaded", () => {
  if (user.type === "professionnel") {
    window.location.href = "dashboard_pro.html";
  } else if (user.type === "patient") {
    window.location.href = "dashboard_patient.html";
  } else {
    alert("Type d'utilisateur inconnu.");
  }
});
