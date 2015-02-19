<?php
require '../vendor/autoload.php';

$app = new \Slim\Slim();
$db = new mysqli("localhost", "colin", "saltytuna814", "TeamTrack");

// Helper method to get a string description for an HTTP status code
// From http://www.gen-x-design.com/archives/create-a-rest-api-with-php/ 
function getStatusCodeMessage($status)
{
    // these could be stored in a .ini file and loaded
    // via parse_ini_file()... however, this will suffice
    // for an example
    $codes = Array(
        100 => 'Continue',
        101 => 'Switching Protocols',
        200 => 'OK',
        201 => 'Created',
        202 => 'Accepted',
        203 => 'Non-Authoritative Information',
        204 => 'No Content',
        205 => 'Reset Content',
        206 => 'Partial Content',
        300 => 'Multiple Choices',
        301 => 'Moved Permanently',
        302 => 'Found',
        303 => 'See Other',
        304 => 'Not Modified',
        305 => 'Use Proxy',
        306 => '(Unused)',
        307 => 'Temporary Redirect',
        400 => 'Bad Request',
        401 => 'Unauthorized',
        402 => 'Payment Required',
        403 => 'Forbidden',
        404 => 'Not Found',
        405 => 'Method Not Allowed',
        406 => 'Not Acceptable',
        407 => 'Proxy Authentication Required',
        408 => 'Request Timeout',
        409 => 'Conflict',
        410 => 'Gone',
        411 => 'Length Required',
        412 => 'Precondition Failed',
        413 => 'Request Entity Too Large',
        414 => 'Request-URI Too Long',
        415 => 'Unsupported Media Type',
        416 => 'Requested Range Not Satisfiable',
        417 => 'Expectation Failed',
        500 => 'Internal Server Error',
        501 => 'Not Implemented',
        502 => 'Bad Gateway',
        503 => 'Service Unavailable',
        504 => 'Gateway Timeout',
        505 => 'HTTP Version Not Supported'
    );
 
    return (isset($codes[$status])) ? $codes[$status] : '';
}
 
// Helper method to send a HTTP response code/message
function sendResponse($status = 200, $body = '', $content_type = 'text/html')
{
    $status_header = 'HTTP/1.1 ' . $status . ' ' . getStatusCodeMessage($status);
    header($status_header);
    header('Content-type: ' . $content_type);
    echo $body;
}

// Fetch all
$app->get('/runners', function() use ($db) {
          
        $result = array();
        $sql= "SELECT r.id, r.firstName, r.lastName, x.description AS stateName, s.description AS schoolName 
        FROM Runners r 
        JOIN dmn_Schools s ON r.dmn_SchoolsID = s.id 
        JOIN dmn_States x ON x.id = s.dmn_StatesID"; 
        
        $r = $db->query($sql);
        while($runner = $r->fetch_assoc()){
            
            $result[] = $runner;
        }

        // return JSON encoded array
        echo json_encode($result);
});

// Filter list
$app->get('/runners/:name', function($name) use ($db) {
          
        $result = array();
        $sql= "SELECT r.id, r.firstName, r.lastName, x.description AS stateName, s.description AS schoolName 
        FROM Runners r 
        JOIN dmn_Schools s ON r.dmn_SchoolsID = s.id 
        JOIN dmn_States x ON x.id = s.dmn_StatesID
        WHERE r.lastName LIKE '$name%'";
        
        $r = $db->query($sql);
        while($runner = $r->fetch_assoc()){
            
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

    // Retrieve input values - put into local vars
    $fName = $request['fName'];
    $lName = $request['lName'];
    $sCode = $request['sCode'];

    try {
        // Prepare statement
        $stmt = $db2->prepare("INSERT INTO Runners (firstName,lastName,dmn_SchoolsID) VALUES (?, ?, ?)");
        $stmt->bind_param("ssi", $fName, $lName, $sCode);
        $stmt->execute();
        $stmt->close();

        // Send success code
        sendResponse(200, json_encode('Success'));
        
    } catch(PDOException $e) {
        // Send error code
        sendResponse(400, '. $e->getMessage() .');
    }
});

// Create new Team
$app->post('/teams', function() use ($app) {
    
    $db2 = new mysqli("localhost", "colin", "saltytuna814", "TeamTrack");
    $request = (array) json_decode($app->request()->getBody());
    $app->response()->header('Content-Type', 'application/json');
    
    // Retrieve input values - put into local vars
    $tName = $request['tName'];
    $userID = 23;
    $sCode = $request['sCode'];

    try {
        // Prepare statement
        $stmt = $db2->prepare("INSERT INTO Teams (teamName, ownerUserID, dmn_SchoolsID) VALUES (?,?,?)");
        $stmt->bind_param("sii", $tName, $userID, $sCode);
        $stmt->execute();
        $stmt->close();

        // Send success code
        sendResponse(200, json_encode('Success'));

    } catch(PDOException $e) {
        // Send error code
        sendResponse(400, '. $e->getMessage() .');
    }

    
});

// Fetch dmn_Schools
$app->get('/dmnSchools', function() use ($db) {
          
        $result = array();
        $sql= "SELECT id, description FROM dmn_Schools"; 
        
        $r = $db->query($sql);
        while($domainVal = $r->fetch_assoc()){
            
            $result[] = $domainVal;
        }

        // return JSON encoded array
        echo json_encode($result);
});


// Fetch dmn_States
$app->get('/dmnStates', function() use ($db) {
          
        $result = array();
        $sql= "SELECT id, description FROM dmn_States"; 
        
        $r = $db->query($sql);
        while($domainVal = $r->fetch_assoc()){
            
            $result[] = $domainVal;
        }

        // return JSON encoded array
        echo json_encode($result);
});

// Fetch schools from state
$app->get('/dmnSchools/:id', function($id) use ($db) {
          
        $result = array();
        $sql= "SELECT id, description FROM dmn_Schools WHERE dmn_StatesID = $id"; 
        //$sql= "SELECT id, description FROM dmn_States";

        $r = $db->query($sql);
        while($domainVal = $r->fetch_assoc()){
            
            $result[] = $domainVal;
        }

        // return JSON encoded array
        echo json_encode($result);
});

$app->run();

?>