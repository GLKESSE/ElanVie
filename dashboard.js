
document.addEventListener("DOMContentLoaded", () => {
  const stats = {
    totalPatientes: 80,
    accouchements: 30,
    garcons: 16,
    filles: 14,
    mois: ["Jan", "Fév", "Mars", "Avr", "Mai", "Juin"],
    activiteMensuelle: [10, 14, 12, 9, 20, 15]
  };

  document.getElementById("total-patientes").textContent = stats.totalPatientes;
  document.getElementById("accouchements").textContent = stats.accouchements;
  document.getElementById("garcons").textContent = stats.garcons;
  document.getElementById("filles").textContent = stats.filles;
  document.getElementById("taux").textContent =
    Math.round((stats.accouchements / stats.totalPatientes) * 100) + "%";

  new Chart(document.getElementById("graphiqueActivite"), {
    type: "bar",
    data: {
      labels: stats.mois,
      datasets: [{
        label: "Consultations mensuelles",
        backgroundColor: "#d63384",
        data: stats.activiteMensuelle
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });

  new Chart(document.getElementById("graphiqueSexe"), {
    type: "pie",
    data: {
      labels: ["Garçons", "Filles"],
      datasets: [{
        label: "Répartition par sexe",
        data: [stats.garcons, stats.filles],
        backgroundColor: ["#4dabf7", "#f783ac"]
      }]
    },
    options: { responsive: true }
  });
});
