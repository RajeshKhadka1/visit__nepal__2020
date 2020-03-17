<?php 
 if(isset($_POST['submit'])){

    $mail = $_POST['mail'];
    mail("rajeshsinghkhadka100@gmail.com","New subscriber",$mail);
 }