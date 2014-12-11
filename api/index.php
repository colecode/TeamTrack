<?php
require '../vendor/autoload.php';

$app = new \Slim\Slim();
$db = new mysqli("localhost", "colin", "saltytuna814", "TeamTrack");

// GET Runners
$app->get('/runners', function() use ($db) {
          
        $result = array();
        $sql= "SELECT id, first, last, school FROM runners"; 
        
        $r = $db->query($sql);
        while($runner = $r->fetch_assoc()){
            
            // Add single runner into total array
            $result[] = $runner;
        }

        // return JSON encoded array
        echo json_encode($result);
});

// GET Runners/id
$app->get('/runners/:id', function($id) use ($db) {

	    $result = array();
		$sql= "SELECT id, first, last, school FROM runners WHERE id = $id";  

        $r = $db->query($sql);
        while($runner = $r->fetch_assoc()){
            
            // Add single runner into total array
            $result[] = $runner;
        }

        // return JSON encoded array
        echo json_encode($result);
});

$app->run();

?>