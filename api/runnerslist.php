<?php

class RedeemAPI {

    // Constructor - open DB connection
    function __construct() {
        $this->db = new mysqli("localhost", "colin", "saltytuna814", "TeamTrack");
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

        $result = array();
        $r = $this->db->query('SELECT id, first, last, school FROM runners');
        while($runner = $r->fetch_assoc()){
            
            // Add single runner into total array
            $result[] = $runner;
        }

        // return JSON encoded array
        echo json_encode($result);
	}
}

// This is the first thing that gets called when this page is loaded
// Creates a new instance of the RedeemAPI class and calls the redeem method
$api = new RedeemAPI;
$api->redeem();
 
?>