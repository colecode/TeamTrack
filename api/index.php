<?php
require '../vendor/autoload.php';

$app = new \Slim\Slim();
$db = new mysqli("localhost", "colin", "saltytuna814", "TeamTrack");

// Fetch all Runners
$app->get('/runners', function() use ($db) {
          
        $result = array();
        $sql= "SELECT id, firstName, lastName, schoolName FROM Runners"; 
        
        $r = $db->query($sql);
        while($runner = $r->fetch_assoc()){
            
            // Add single runner into total array
            $result[] = $runner;
        }

        // return JSON encoded array
        echo json_encode($result);
});

// Fetch specific Runner
$app->get('/runners/:id', function($id) use ($db) {

	    $result = array();
		$sql= "SELECT id, firstName, lastName, schoolName FROM Runners WHERE id = $id";  

        $r = $db->query($sql);
        while($runner = $r->fetch_assoc()){
            
            // Add single runner into total array
            $result[] = $runner;
        }

        // return JSON encoded array
        echo json_encode($result);
});

// Update existing Runner
$app->post('/runners/:id', function($id) use ($db) {
    echo 'Colin!!!';
});

// Create new Runner
$app->post('/runners', function() use ($app) {
    
    $db2 = new mysqli("localhost", "colin", "saltytuna814", "TeamTrack");
    $request = (array) json_decode($app->request()->getBody());
    $app->response()->header('Content-Type', 'application/json');

    // Retrieve input values from form
    $fName = $request['fName'];
    $lName = $request['lName'];
    $sName = $request['sName'];

    $sql= "INSERT INTO Runners (firstName,lastName,schoolName) VALUES ('$fName', '$lName', '$sName')"; 
    $r = $db2->query($sql);

    echo json_encode($fName);
});

// Create new Team
$app->post('/teams', function() use ($app) {
    
    $db2 = new mysqli("localhost", "colin", "saltytuna814", "TeamTrack");
    $request = (array) json_decode($app->request()->getBody());
    $app->response()->header('Content-Type', 'application/json');
    
    $tName = $request['tName'];

    // '23' is hardcoded until the User Management system is set up
    $sql= "INSERT INTO Teams (teamName, ownerUserID) VALUES ('$tName',23)"; 
    $r = $db2->query($sql);

    echo json_encode($tName);
});

$app->run();

?>