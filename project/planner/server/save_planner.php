<?php
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$date = $data['date'];
$title = $data['title'];
$content = $data['content'];

$stmt = $pdo->prepare("INSERT INTO planners (date, title, content) VALUES (?, ?, ?)");
$stmt->execute([$date, $title, $content]);

echo json_encode(['status' => 'success']);
?>
