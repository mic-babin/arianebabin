<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'ArianeBabin.com';
  $email_subject = 'Formulaire de contact';
  $email_body = "Nom : $name.\n".
                "Téléphone : $phone.\n".
                "Courriel : $email.\n".
                "Message : $message.\n";
  
  $to = "michael.babin@outlook.fr";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $email \r\n";

  mail($to,$email_subject,$email_body,$headers);
  header("location: index.html");
  ?>