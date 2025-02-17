<?php
header("Content-Type: application/json");

// Database connection
$host = "localhost";
$user = "root"; // Change if necessary
$password = ""; // Change if necessary
$database = "registration_db";

$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["fullName"], $data["email"], $data["phone"])) {
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO users (fullName, email, phone, dob, address, location, country, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", 
        $data["fullName"], 
        $data["email"], 
        $data["phone"], 
        $data["dob"], 
        $data["address"], 
        $data["location"], 
        $data["country"], 
        $data["zip"]
    );

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Registration successful"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error"]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid data"]);
}

$conn->close();
?>
