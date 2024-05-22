<?php
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$date = $data['date'];
$type = $data['type'];
$reps = $data['reps'];
$weight = $data['weight'];
$sets = $data['sets'];

$stmt = $pdo->prepare("INSERT INTO records (date, type, reps, weight, sets) VALUES (?, ?, ?, ?, ?)");
$stmt->execute([$date, $type, $reps, $weight, $sets]);

echo json_encode(['status' => 'success']);
?>
