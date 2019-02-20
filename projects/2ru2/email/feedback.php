<?php

if (!empty($_POST['phone']) ) {
    $return_message = "";
    $to = "info@2rus.pro, leadlist@dimbrowsky.com";

    $phone = $_POST['phone'];
    $phone = trim($phone);
    $phone = htmlspecialchars($phone);

    $name = $_POST['name'];
    $name = trim($name);
    $name = htmlspecialchars($name);

    $subject = $_POST['subject'];
    $subject = trim($subject);
    $subject = htmlspecialchars($subject);

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

    $headers = "From: noreply@website.com/\r\n";
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