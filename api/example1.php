<?php
 
class RedeemAPI {
    // Main method to redeem a code
    private $db;
 
    // Constructor - open DB connection
    function __construct() {
        $this->db = new mysqli('localhost', 'username', 'password', 'TeamTrack');
        $this->db->autocommit(FALSE);
    }
 
    // Destructor - close DB connection
    function __destruct() {
        $this->db->close();
    }

    // Helper method to send a HTTP response code/message
    function sendResponse($status = 200, $body = '', $content_type = 'text/html')
    {
    	$status_header = 'HTTP/1.1 ' . $status . ' ' . getStatusCodeMessage($status);
    	header($status_header);
    	header('Content-type: ' . $content_type);
    	echo $body;
    }
 
    // Main method to redeem a code
    function redeem() {
        // Print all codes in database
        $stmt = $this->db->prepare('SELECT id, first, last, school FROM runners WHERE id = 2');
        $stmt->execute();
        $stmt->bind_result($id, $first, $last, $school);
        while ($stmt->fetch()) {
            //echo "$code has $uses_remaining uses remaining!";
            echo '[{"id":$id, "first":$first, "last":$last, "school":$school}]';
        }
        $stmt->close();
	}
}


// This is the first thing that gets called when this page is loaded
// Creates a new instance of the RedeemAPI class and calls the redeem method
$api = new RedeemAPI;
$api->redeem();
 
?>