﻿<?php

if (!empty($_POST['phone']) ) {
    $return_message = "";
    $to = "main.email.seryoga@gmail.com";
    $subject = 'Запишитесь на курсы онлайн Arabic School';

    $phone = $_POST['phone'];
    $phone = trim($phone);
    $phone = htmlspecialchars($phone);

    $name = $_POST['name'];
    $name = trim($name);
    $name = htmlspecialchars($name);

    $message = "
    <html> 
        <head> 
            <title>$subject</title> 
        </head> 
        <body>
          <table>
            <tr><td><b>Имя: </b></td><td>$name</td></tr>
            <tr><td><b>Телефон: </b></td><td>$phone</td></tr>
          </table>
        </body> 
    </html>"; 

    $headers = "From: noreply@courses.arabic-school.org/\r\n";
    $headers .= "Content-type: text/html; charset=utf-8 \r\n";
    $send_mail = mail($to, $subject, $message, $headers); 

    if ( $send_mail ) {
      $return_message = "mail success";
    }
    else {
      $return_message = "mail error";
    }
    echo $return_message;
  }

exit();
?>