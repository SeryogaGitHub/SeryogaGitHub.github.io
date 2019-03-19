<?php

if (!empty($_POST['phone']) ) {
    $return_message = "";
    $to = "leadlist@dimbrowsky.com";

    $phone = $_POST['phone'];
    $phone = trim($phone);
    $phone = htmlspecialchars($phone);

    $name = $_POST['name'];
    $name = trim($name);
    $name = htmlspecialchars($name);

    $subject = $_POST['subject'];
    $subject = trim($subject);
    $subject = htmlspecialchars($subject);

    if (isset($_POST['heating'])) {
        $heating = $_POST['heating'];
    }

    if (isset($_POST['water-supply'])) {
        $water_supply = $_POST['water-supply'];
    }

    if (isset($_POST['sewage'])) {
        $sewage = $_POST['sewage'];
    }

    if (isset($_POST['ventilation'])) {
        $ventilation = $_POST['ventilation'];
    }

    if (isset($_POST['conditioning'])) {
        $conditioning = $_POST['conditioning'];
    }

    if (isset($_POST['boiler-rooms'])) {
        $boiler_rooms = $_POST['boiler-rooms'];
    }

    if (isset($_POST['heat-pumps'])) {
        $heat_pumps = $_POST['heat-pumps'];
    }

    $message = "
    <html> 
        <head> 
            <title>$subject</title> 
        </head> 
        <body>
          <table>
            <tr><td><b>Имя: </b></td><td>$name</td></tr>
            <tr><td><b>Телефон: </b></td><td>$phone</td></tr>
            <tr><td><b>Услуги: </b></td><td>$heating $water_supply $sewage $ventilation $conditioning $boiler_rooms $heat_pumps</td></tr>
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