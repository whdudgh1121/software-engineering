<?php
// get_data.php
require 'db.php';

$date = $_GET['date'];

$response = [];

// Fetch planner data
$stmt = $pdo->prepare("SELECT * FROM planners WHERE date = ?");
$stmt->execute([$date]);
$response['planner'] = $stmt->fetch(PDO::FETCH_ASSOC);

// Fetch records data
$stmt = $pdo->prepare("SELECT * FROM records WHERE date = ?");
$stmt->execute([$date]);
$response['records'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($response);
?>
