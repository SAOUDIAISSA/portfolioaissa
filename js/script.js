document.addEventListener("DOMContentLoaded", () => {
    // Initialisez EmailJS avec votre clé publique
    emailjs.init("vNYeoNh7VjnhwUgRR");
});

document.querySelector("#contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Préparation des données du formulaire
    const formData = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        to_name: "Aissa Saoudi",
    };

    // Envoi via EmailJS
    emailjs
        .send("service_ji9vz3q", "template_ssl6t7x", formData)
        .then(
            function (response) {
                alert("Votre message a été envoyé avec succès !");
                console.log("SUCCESS!", response.status, response.text);
                document.querySelector("#contact-form").reset(); // Réinitialise le formulaire
            },
            function (error) {
                alert("Une erreur est survenue. Vérifiez la console pour plus de détails.");
                console.error("Erreur détaillée :", error);
            }
        );
});
