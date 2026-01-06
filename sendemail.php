<?php

// Define some constants
define( "RECIPIENT_NAME", "John Doe" );
define( "RECIPIENT_EMAIL", "youremail@mail.com" );


// Read the form values
$success = false;
$senderName = isset( $_GET['username'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_GET['username'] ) : "";
$senderEmail = isset( $_GET['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_GET['email'] ) : "";
$subject = isset( $_GET['subject'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_GET['subject'] ) : "";
$message = isset( $_GET['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_GET['message'] ) : "";

// If all values exist, send the email
if ( $senderName && $senderEmail && $subject && $message) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $senderName . " <" . $senderEmail . ">";
  $msgBody = " Subject: " . $subject ." Message: " . $message . "";
  $success = mail( $recipient, $headers, $msgBody );

  //Set Location After Successsfull Submission
  header('Location: contact.html?message=Successfull');
}

else{
	//Set Location After Unsuccesssfull Submission
  	header('Location: index.html?message=Failed');	
}

?>