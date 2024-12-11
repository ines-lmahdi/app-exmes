<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $lastname = htmlspecialchars($_POST['lastname']);
    $firstname = htmlspecialchars($_POST['firstname']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $choice1 = isset($_POST['choice-1']) ? 'Visite médicale d’aptitude' : '';
    $choice2 = isset($_POST['choice-2']) ? 'Visite médicale & psycho-technique couplée' : '';

    // Préparer le contenu de l'email
    $subject = "Demande de devis de $firstname $lastname";
    $body = "Nom: $lastname\nPrénom: $firstname\nTéléphone: $phone\nEmail: $email\n\nMessage: $message\n\nMotifs: $choice1 $choice2";
    $headers = "From: $email";

    // Envoyer l'email
    $to = "contact@exmes.fr";
    if (mail($to, $subject, $body, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur est survenue. Veuillez réessayer plus tard.";
    }
}
?>
