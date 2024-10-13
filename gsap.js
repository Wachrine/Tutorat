// Assurez-vous que le DOM est chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".partRech", { x: -50 });
  gsap.from(".partillubanner", { x: 200 });

  gsap.registerPlugin(ScrollTrigger); // Enregistrer le plugin ScrollTrigger

  // Créez une timeline GSAP
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".etapes", // Éléments qui déclenchent l'animation
      start: "top center", // Quand le haut de la section atteint le centre de la fenêtre
    },
  });

  // Ajoutez les animations pour chaque élément
  tl.from(".gsap1", { duration: 0.2, opacity: 0, y: 50 }) // Anime l'élément 1
    .from(".gsap2", { duration: 0.5, opacity: 0, y: 50 }, "<") // Anime l'élément 2 après l'élément 1
    .from(".gsap3", { duration: 0.8, opacity: 0, y: 50 }, "<"); // Anime l'élément 3 après l'élément 2
});

