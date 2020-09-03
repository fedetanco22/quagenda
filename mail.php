<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$rubro = $_POST['rubro'];
$mensaje = $_POST['mensaje'];

// OBTENEMOS EL IP 
function getUserIpAddr(){
    if(!empty($_SERVER['HTTP_CLIENT_IP'])){
        //ip from share internet
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
        //ip pass from proxy
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }else{
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    // $mail->isSMTP();                                            // Send using SMTP
    // $mail->Host       = 'dtcwin155.ferozo.com';                    // Set the SMTP server to send through
    // $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    // $mail->Username   = 'no-reply@w1551599.ferozo.com';                     // SMTP username
    // $mail->Password   = 'wivifu83VE';                               // SMTP password
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    // $mail->Port       = 25;                                 // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('quagenda@gmail.com', 'Formulario Quagenda');
    $mail->addAddress('quagenda@gmail.com', 'Info Quagenda');
    //$mail->addAddress('javipons22@gmail.com', 'Joe User');     // Add a recipient
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Nuevo contacto desde el formulario de QUAGENDA';
    $mail->Body    = '<h2>Nuevo contacto desde el formulario de QUAGENDA</h2>'
                    . '<div style="color:black;display:block;font-size:1.2em"><span style="font-weight:bold">Nombre: </span>'. $nombre . '</div>'
                    . '<div style="color:black;display:block;font-size:1.2em"><span style="font-weight:bold">Rubro: </span>'. $apellido . '</div>'
                    . '<div style="color:black;display:block;font-size:1.2em"><span style="font-weight:bold">Email: </span>'. $email . '</div>' 
                    . '<div style="color:black;display:block;font-size:1.2em"><span style="font-weight:bold">rubro: </span>'. $rubro . '</div>' 
                    . '<div style="color:black;display:block;font-size:1.2em;margin: 25px 0;"><span style="font-weight:bold">Mensaje: </span>'. $mensaje . '</div>'
                    . '<div style="color:black;display:block;font-size:1.2em"><span style="font-weight:bold">IP: </span>' . getUserIpAddr() . '</div>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $status = $mail->send();
    if(!$status) {
        echo'<script>window.location.href="https://quagenda.com/?error=true"; </script>';
        exit();
    } else {
        echo'<script>window.location.href="https://quagenda.com/?error=false"; </script>';
        exit();
    }
} catch (Exception $e) {
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    echo'<script>window.location.href="https://quagenda.com/?error=true"; </script>';
    exit();
}