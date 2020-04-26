<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];
}

$mailTo = "michael.babin@outlook.fr";
$headers = "From: ". $mailFrom;
$txt = "You have received an e-mail from ".$name.".\n\n".$message;


mail($mailTo, $subject, $txt, $headers);
header("Location: index.html?mailsend")

  ?>