<?php
// get_data.php
require 'db.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$date = $_GET['date'];

$response = [];

try {
    // Fetch planner data
    $stmt = $pdo->prepare("SELECT * FROM planners WHERE date = ?");
    $stmt->execute([$date]);
    $response['planner'] = $stmt->fetch(PDO::FETCH_ASSOC);

    // Fetch records data
    $stmt = $pdo->prepare("SELECT * FROM records WHERE date = ?");
    $stmt->execute([$date]);
    $response['records'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($response);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
