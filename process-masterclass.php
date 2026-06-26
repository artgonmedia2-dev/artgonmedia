<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nom = strip_tags(trim($_POST["nom"] ?? ''));
    $prenom = strip_tags(trim($_POST["prenom"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"] ?? ''));
    $statut = strip_tags(trim($_POST["statut"] ?? ''));
    $etablissement = strip_tags(trim($_POST["etablissement"] ?? 'Non spécifié'));

    // Vérification des champs obligatoires
    if (empty($nom) || empty($prenom) || empty($email) || empty($phone) || empty($statut)) {
        echo "<script>alert('Merci de remplir tous les champs obligatoires.'); window.history.back();</script>";
        exit;
    }

    $recipient = "Artgonmedia@gmail.com";
    $subject = "Nouvelle Inscription - Masterclass IA : $nom $prenom";

    $email_content = "Nouvelle inscription reçue pour la Masterclass :\n\n";
    $email_content .= "Nom: $nom\n";
    $email_content .= "Prénom: $prenom\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone (WhatsApp): $phone\n";
    $email_content .= "Statut: $statut\n";
    if ($statut == 'etudiant') {
        $email_content .= "Établissement: $etablissement\n";
    }

    $email_headers = "From: $nom <$email>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Succès
        echo "<script>
                alert('Inscription réussie ! Nous avons bien reçu votre demande.'); 
                window.location.href = 'inscription-masterclass.html';
              </script>";
    } else {
        // Échec
        echo "<script>
                alert('Oops! Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer.'); 
                window.history.back();
              </script>";
    }
} else {
    echo "Il y a un problème avec votre soumission, veuillez réessayer.";
}
?>
