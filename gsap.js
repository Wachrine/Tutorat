document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".partRech", {x: 50});
    gsap.from(".partillubanner", {x: 200});
    gsap.registerPlugin(ScrollTrigger); // Enregistrer le plugin ScrollTrigger
    
        // Créez une timeline GSAP
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".etapes", // Éléments qui déclenchent l'animation
                start: "top center", // Quand le haut de la section atteint le centre de la fenêtre
            }
        });
    
        // Ajoutez les animations pour chaque élément
        // Ajoutez les animations pour tous les éléments avec un effet de stagger
    tl.from(".gsap", { 
        duration: 0.5, 
        opacity: 0, 
        y: 50, 
        stagger: 0.2 // Délai entre chaque animation
    });
    });