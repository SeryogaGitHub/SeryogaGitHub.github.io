<?php
  $recepiet = 'main.email.seryoga@gmail.com';

  $name = trim($_POST['name']);
  $city = trim($_POST['city']);
  $position = trim($_POST['position']);
  $email = trim($_POST['email']);
  $more = trim($_POST['more']);

  $message = "Компанія, ім'я: $name \n Місто: $city \n Позиція на яку запрошують: $position \n Email: $email \n Детальна інформація: $more";

  $pageTitle = '!Заявка на роботу з сайта резюме';
  mail($recepiet, $pageTitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepiet");
?>