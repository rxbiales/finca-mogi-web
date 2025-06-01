<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Usa el método POST']);
    exit;
}

$datos = json_decode(file_get_contents('php://input'), true);
$nombre  = trim($datos['nombre']  ?? '');
$email   = trim($datos['email']   ?? '');
$mensaje = trim($datos['mensaje'] ?? '');

if (empty($nombre) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($mensaje)) {
    http_response_code(400);
    echo json_encode(['error' => 'Completa todos los campos correctamente.']);
    exit;
}

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'renerubialesdebrito@gmail.com';
    $mail->Password   = 'yfiaimnhvbmldtcy';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('renerubialesdebrito@gmail.com', 'Finca Vozes da Mata');
    $mail->addReplyTo($email, $nombre);
    $mail->addAddress('renerubialesdebrito@gmail.com', 'Receptor');

    $mail->isHTML(false);
    $mail->Subject = "Nuevo mensaje de: {$nombre}";
    $mail->Body    = "Nombre: {$nombre}\nEmail: {$email}\n\nMensaje:\n{$mensaje}";

    $mail->send();
    echo json_encode(['message' => 'Mensaje enviado correctamente']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error'     => 'Hubo un error al enviar el mensaje.',
        'mailError' => $mail->ErrorInfo
    ]);
}
