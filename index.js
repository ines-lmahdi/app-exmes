const navigation = document.querySelector(".nav-bar");
console.log(navigation);
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navigation.style.top = "0px";
  } else {
    navigation.style.top = "-50px";
  }
});

const navMobile = document.querySelector(".nav-mobile");
console.log(navMobile);
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navMobile.style.top = "0px";
  } else {
    navMobile.style.top = "-50px";
  }
});

/* FORMUALIRE  */

// document.querySelector(".form-style").addEventListener("submit", function (e) {
//   e.preventDefault(); // Empêche le rechargement de la page

//   // Récupération des champs
//   const lastname = document.getElementById("lastname").value;
//   const firstname = document.getElementById("firstname").value;
//   const phone = document.getElementById("phone").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;

//   // Récupération des choix du motif
//   const choice1 = document.getElementById("choice-1").checked
//     ? "Visite médicale d'aptitude"
//     : "";
//   const choice2 = document.getElementById("choice-2").checked
//     ? "Visite médicale & psycho-technique couplée"
//     : "";

//   // Concaténation des motifs sélectionnés
//   const motifs = [choice1, choice2].filter(Boolean).join(", ");

//   // Formatage du contenu de l'email
//   const emailBody = `
// Nom : ${lastname}
// Prénom : ${firstname}
// Téléphone : ${phone}
// Email : ${email}

// Message :
// ${message}

// Motifs sélectionnés : ${motifs}
//     `.trim();

//   // Génération du lien mailto
//   const mailtoLink = `mailto:ines.lmahdi@gmail.com?subject=Demande de devis&body=${encodeURIComponent(
//     emailBody
//   )}`;

//   // Ouvre le client mail par défaut avec les données
//   window.location.href = mailtoLink;
// });

/* BACKEND PHP*/

document.querySelector(".form-style").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  const formData = new FormData(this); // Récupère automatiquement tous les champs du formulaire

  fetch("send_email.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      alert("Email envoyé avec succès !");
      console.log(data); // Vérifie la réponse du serveur
    })
    .catch((error) => {
      alert("Erreur lors de l'envoi de l'email.");
      console.error("Erreur :", error);
    });
});
