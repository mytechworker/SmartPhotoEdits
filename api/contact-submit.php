<?php
session_start();

$spamcheck_field = '';


//to track search engine and keyword
//include_once "../includes/keyword.php";


// Auto responder enable
$auto_respond = "1";

//Contact Details
//if (!isset($_POST["salutation"]) || $_POST["salutation"] == "")	$salutation = "Not Specified"; else $salutation = $_POST["salutation"];
if (!isset($_POST["firstName"]) || $_POST["firstName"] == "")	$FirstName = "Not Specified"; else $FirstName = $_POST["firstName"];
//if (!isset($_POST["LastName"]) || $_POST["LastName"] == "")	$LastName = "Not Specified"; else $LastName = $_POST["LastName"];
if (!isset($_POST["email"]) || $_POST["email"] == "")	$Email = ""; else $Email = $_POST["email"];
if (!isset($_POST["TelephoneNumber"]) || $_POST["TelephoneNumber"] == "")	$phone = "Not Specified"; else $phone = $_POST["TelephoneNumber"];
if (!isset($_POST["Company"]) || $_POST["Company"] == "")	$company = ""; else $company	= $_POST["Company"];
if (!isset($_POST["country"]) || $_POST["country"] == "")	$raw_country = "Not Specified"; else $raw_country	= $_POST["country"];
$country = substr($raw_country, 4);
$fc_country = substr($raw_country, 0, 4);

//Enquiry Details
$description_key = "62";
if (!isset($_POST["Message"])	|| $_POST["Message"]	== ""	)	$description = "Not Specified"; else $description = $_POST["Message"];

$field2 = "Number of Images";
$field2_fc = "160";
if (!isset($_POST["Numberofimages"])	|| $_POST["Numberofimages"]	== ""	)	$value2	= "Not Specified"; else $value2	= $_POST["Numberofimages"];
if ( $_POST["Numberofimages"] != ""){ $value2_fc = $_POST["Numberofimages"]; }

$field1 = "Which service would you like to outsource?";
$field1_fc = "44";
//$value_fc1 = ret_for_fc($_POST["service1"],0,4);
//$value_fc2 = ret_for_fc($_POST["service2"],0,4);
//$value_fc3 = ret_for_fc($_POST["service3"],0,4);
//$value_fc4 = ret_for_fc($_POST["service4"],0,4);
//$value_fc5 = ret_for_fc($_POST["service5"],0,4);
//$value_fc6 = ret_for_fc($_POST["service6"],0,4);
//$value_fc7 = ret_for_fc($_POST["service7"],0,4);
//$value_fc8 = ret_for_fc($_POST["service8"],0,4);

function ret_for_fc($content,$from,$to)
{
	$fc_val = substr($content,$from,$to);
	return $fc_val;
}
//if ( $value_fc1 != ""){ $value1_fc = $value_fc1 . ", "; }
//if ( $value_fc2 != ""){ $value1_fc = $value1_fc.$value_fc2.", "; }
//if ( $value_fc3 != ""){ $value1_fc = $value1_fc.$value_fc3.", "; }
//if ( $value_fc4 != ""){ $value1_fc = $value1_fc.$value_fc4.", "; }
//if ( $value_fc5 != ""){ $value1_fc = $value1_fc.$value_fc5.", "; }
//if ( $value_fc6 != ""){ $value1_fc = $value1_fc.$value_fc6.", "; }
//if ( $value_fc7 != ""){ $value1_fc = $value1_fc.$value_fc7.", "; }
//if ( $value_fc8 != ""){ $value1_fc = $value1_fc.$value_fc8; }

if ( $value1_fc == "") $value1_fc = "Not Specified";


function ret_for_mail($content,$to)
{
	$mail_val = substr($content,$to);
	return $mail_val;
}

$action_value = 'mForm';
$currentpage_url = $_POST['currentpage_url'];

 
	$fullurl = "https://www.smartphotoedits.com/contact-us.php";
	$form_type = "Normal Form";
	$subject_line = "[SPE2] Website Enquiry";


//echo $fullurl;

//$service = "smartphotoedits";
$service = "Imaging";
$subservice = "";

//Other Details
$ip = $_SERVER['REMOTE_ADDR'];
$formname = "contactform";
//$formname = "kamal.kanth";
$_SESSION["formname"] = $formname;
$_SESSION["email_id"] = $Email;
$useragent = $_SERVER['HTTP_USER_AGENT'];

$stats_cookie = $HTTP_COOKIE_VARS["_cgid"];
if ((!isset($stats_cookie)) || ($stats_cookie == ""))$statsid = "Not Specified"; else $statsid = $stats_cookie;

$date = date("d/m/Y");
$leadsource = "Website";
$sitename = "www.smartphotoedits.com";
$weekno = "Week" . " " . date("W");

?>

<?php
//Attachments Starts here
//This function separates the extension from the rest of the file name and returns it
function findexts($filename)
{
	$filename = strtolower($filename);
//	$exts = preg_split("[/\\.]", $filename);
	$exts = end(preg_split("/\\./",$filename));
//	$n = count($exts)-1;
//	$exts = $exts[$n];
	return $exts;
}

if ($_FILES['upfile1']['size'] > 0)
{
	//$mail->AddAttachment($_FILES['upfile2']['tmp_name'],$_FILES['upfile2']['name']);
	$file_name = ($_FILES['upfile1']['name']);
    
	$first_part = substr($file_name,0,-4);
	//echo $file_ext;
    
    
	$ext = findexts($_FILES['upfile1']['name']);
//    echo $ext;
//    exit();
    
	$ran = rand();
	$ran2 = $first_part."-".date("d-m-y-H-m-s").".";


	$target_path = "../attachments/";
	//$target_path = $target_path . basename( $_FILES['upfile1']['name']);
	$target_path = $target_path . $ran2.$ext; 
	//$_FILES['upfile1']['tmp_name'];		
	//$target_path = "../attachments/";
	//$target_path = $target_path . basename( $_FILES['upfile1']['name']); 
	if(move_uploaded_file($_FILES['upfile1']['tmp_name'], $target_path)) 
	{
		//$filename1 = $_FILES['upfile1']['name'];
		$filename1 = $ran2.$ext;
		$file = "https://".$_SERVER['HTTP_HOST']."/attachments/".$filename1;
		$file_attach = "<a href='$file'>$file</a>";
	}
}



$file_key = "78";
if ( $file_attach == "") $file_attach	= "File Not Attached";
if ( $file == "") $file	= "File Not Attached";


// SPAM check feild
//$spamcheck_field = $_POST['samcheck_28849art22kLsj'];

//echo $FirstName."<br>";
//echo $Email."<br>";
//echo $action_value."<br>";
//echo $phone."<br>";
//echo $company."<br>";
//echo $country."<br>";
//echo $description."<br>";
//echo $form_type."<br>";
//echo $currentpage_url;

//exit();
?>
<?php
//Checking for any errors
//ini_set("display_errors", "1");
//  error_reporting(E_ALL);
// Code to check the State id  posting the data, Else moving out the page  //
//$string = $_COOKIE["CSCOMPOUND"];
//echo htmlspecialchars($string);
//$bits = split("[*]",$string);
include_once "../api/spamcontrol_valid.php";
//echo $intspamid . "First intspamid";
//echo $bypasstrigger ."By passactivated";
//echo $intspamid;
//exit();

//include $_SERVER['DOCUMENT_ROOT']."/forms/recaptchalib.php";

//$secret = "6LeiiMQZAAAAAP5twz8wENTiU4Hj4ZMyZToauTmc";

// empty response
//$response = null;
 
// check secret key
//$reCaptcha = new ReCaptcha($secret);

// if Captcha Acceppted check response
// if ($_POST["g-recaptcha-response"]) {
//     $response = $reCaptcha->verifyResponse(
//         $_SERVER["REMOTE_ADDR"],
//         $_POST["g-recaptcha-response"]
//     );
// }

//if ($response != null && $response->success) {
    
?>

<?php
//echo 'a';


//PHP mailer for SMTP
if ($intspamid=='ok' && $bypasstrigger=='NO')
{
	include_once "../forms/phpmailer_details_valid_new.php";
//	$mail->Subject  =  "$subject_line";
}
elseif($intspamid!='ok' && $bypasstrigger=='NO')
{
	include_once "../forms/phpmailer_details_spam.php";
//	$mail->Subject  =  "Not Relevant Enquiry";
}
else
{
	
}

//echo "mail pass";
//exit();

//DATABASE INSERTION
//if ($intspamid=='ok'  && $bypasstrigger=='NO')
//{
//	include_once "../forms/db_enquiryinsert_valid.php";	
//}
//elseif($intspamid!='ok' && $bypasstrigger=='NO')
//{
//	include_once "../forms/db_enquiryinsert_spam.php";	
//}
//else
//{
//	// Skip adding SPAM attack enquires to Mail
//    $auto_respond = "0";
//}

//exit();


	$mail->Body =
	"<html>
		<body>
			<table border='1' width='100%' cellpadding='3' cellspacing='0' bordercolor='#ffffff'>
			<tr>
				<td colspan='2' align='center' bgcolor='#DBDBDB' height='5'></td>
			</tr>
			<tr>
				<td width='20%' bgcolor='#E0E0E0'><font face='verdana' size='2'><b class='Mysql_ID'>SPE2 Id</b></font></td>
				<td width='80%' bgcolor='#F4F4F4'><font face='verdana' size='2'><span class='Mysql_Value'>$mysql_id_value</span></font></td>
			</tr>
			<tr>
				<td bgcolor='#E0E0E0'><font face='verdana' size='2'><b>Enquiry Date</b></font></td>
				<td bgcolor='#F4F4F4'><font face='verdana' size='2'>$date</font></td>
			</tr>
			<tr>
				<td colspan='2' align='center' bgcolor='#DBDBDB'><font face='verdana' size='3'><b>CONTACT DETAILS</b></font></td>
			</tr>
			<tr>
				<td bgcolor='#E0E0E0'><font face='verdana' size='2'><b>Name</b></font></td>
				<td bgcolor='#F4F4F4'><font face='verdana' size='2'>$FirstName </font></td>
			</tr>
			<tr>
				<td bgcolor='#E0E0E0'><font face='verdana' size='2'><b>Email</b></font></td>
				<td bgcolor='#F4F4F4'><font face='verdana' size='2'>$Email</font></td>
			</tr>
			<tr>
				<td bgcolor='#E0E0E0'><font face='verdana' size='2'><b>Phone</b></font></td>
				<td bgcolor='#F4F4F4'><font face='verdana' size='2'>$phone</font></td>
			</tr>
			<tr>
				<td bgcolor='#E0E0E0'><font face='verdana' size='2'><b>Country</b></font></td>
				<td bgcolor='#F4F4F4'><font face='verdana' size='2'>$country</font></td>
			</tr>
			<tr>
				<td bgcolor='#E0E0E0' valign='top'><font face='verdana' size='2'><b>$field1</b></font></td>
				<td bgcolor='#F4F4F4'><font face='verdana' size='2'>$value1</font></td>
			</tr>
			<tr>
				<td bgcolor='#E0E0E0'><font face='verdana' size='2'><b>Description of your requirement</b></font></td>
				<td bgcolor='#F4F4F4'><font face='verdana' size='2'>$description</font></td>
			</tr>
			<tr>
				<td width='20%' bgcolor='#E0E0E0' valign='top'><font face='verdana' size='2'><b>Attachments</b></font></td>
				<td width='80%' bgcolor='#F4F4F4'><font face='verdana' size='2'>$file_attach</font></td>
			</tr>
			<tr>
				<td colspan='2' align='center' bgcolor='#DBDBDB'><font face='verdana' size='3'><b>MISCELLANEOUS</b></font></td>
			</tr>
			<tr>
				<td width='20%' bgcolor='#E0E0E0'><font face='verdana' size='2'><b>Remote IP</b></font></td>
				<td width='80%' bgcolor='#F4F4F4'><font face='verdana' size='2'>$ip</font></td>
			</tr>
			<tr>
				<td width='20%' bgcolor='#E0E0E0'><font face='verdana' size='2'><b>Browser</b></font></td>
				<td width='80%' bgcolor='#F4F4F4'><font face='verdana' size='2'>$useragent</font></td>
			</tr>
			<tr>
				<td colspan='2' align='center' bgcolor='#DBDBDB' height='5'></td>
			</tr>
		</table>
		</body>
		</html>
		";


	//echo $mail->Body;
	//echo $intspamid;
	//exit();

if ($intspamid=='ok' && $bypasstrigger=='NO')
{	
	$mail->Subject = $subject_line;
	$mail->addCustomHeader("X-Originating-IP: " . $ip);
	$mail->clearAllRecipients();
	$mail->setFrom($Email, $FirstName);
	$mail->addAddress('mudassar.a@flatworldsolutions.com');     		// Testing a recipient
//	$mail->addAddress('contactform@smartphotoedits.com');     				// Add a recipient - enable only when the site is live
	$mail->addCC('balavendra.a@flatworldsolutions.com');
	$mail->send();
}elseif($intspamid!='ok' && $bypasstrigger=='NO'){
	$mail->Subject = $subject_line;
	$mail->addCustomHeader("X-Originating-IP: " . $ip);
	$mail->clearAllRecipients();
	$mail->setFrom($Email, $FirstName);
//	$mail->addAddress('mudassar.a@flatworldsolutions.com');     		// Testing a recipient
	$mail->addAddress('general.mail@dataentryoutsourced.com');     		// Add a recipient - enable only when the site is live
	$mail->addCC('balavendra.a@flatworldsolutions.com');
	$mail->send();
}else{
    //Skip sending mail
}


//testing code for Auto respond
if ($auto_respond == "1"){
	$subject_line = "Response to Your Online Query - SmartPhotoEdits";
	$mail->Body =
	"<html>
		<body>
		<table border=0 cellspacing=0 cellpadding=0 style='width:60.0%;border-collapse:collapse;font-family:Arial,sans-serif;'>
		  <tr>
			<td style='border-top:solid #f3f3f1 1.0pt;border-left:solid #f3f3f1 1.0pt;border-bottom:none;border-right:solid #f3f3f1 1.0pt;padding:0in 0in 0in 0in'><table border=0 cellspacing=0 cellpadding=0 style='width:100.0%'>
				<tr>
				  <td style='padding:15.0pt 15.0pt 15.0pt 15.0pt;background-color:#fafaf9;'><p><b><span style='color:#323232'>Hi $FirstName,</span></b><br>
					  <br>
					  <b><span style='color:#323232'>Thank you for contacting SmartPhotoEdits. Our Sales Manager will contact you within 1 business day.</span></b><br>
					  <br>
					  <span style='font-size:10.5pt;color:#323232'>Please check your email account's spam folders as well as your voice-mail to make sure that our response reaches you.</span><br>
					  <br>
					  <span style='font-size:10.5pt;color:#323232'>If you do not receive any communication from us within 1 business day, please reply to this email or email us at <b><a href='mailto:info@smartphotoedits.com'><span style='color:#0072B5'>info@smartphotoedits.com</span></a></b>.</span><br>
					  <o:p></o:p>
					</p></td>
				</tr>
			  </table></td>
		  </tr>
		  <tr style='height:22.5pt'>
			<td style='border-top:none;border-left:solid #f3f3f1 1.0pt;border-bottom:none;border-right:solid #f3f3f1 1.0pt;background:#f5f5f4;padding:0in 0in 0in 15.0pt;height:22.5pt'><p style='text-align:left;'><b><span style='font-size:10.5pt;'>Your Enquiry Details:</span></b>
				<o:p></o:p>
			  </p></td>
		  </tr>
		  <tr>
			<td style='border-top:none;border-left:solid #f5f5f4 1.0pt;border-bottom:none;border-right:solid #f5f5f4 1.0pt;padding:15.0pt 15.0pt 15.0pt 15.0pt'><table border=1 cellspacing=0 cellpadding=0 style='width:100.0%;border:0pt;font-family:Arial,sans-serif;'>
				<tr>
				  <td style='border:solid #beeae4 1.0pt;border-right:0pt;background:#ffffff;padding:2.25pt 2.25pt 2.25pt 2.25pt;width:35%;'><p style='margin:2pt 0pt 2pt 0pt;'><b><span style='font-size:10.0pt;'>Email</span></b>
					  <o:p></o:p>
					</p></td>
				  <td style='border:solid #beeae4 1.0pt;background:#ffffff;padding:2.25pt 2.25pt 2.25pt 5pt'><p style='margin:2pt 0pt 2pt 0pt;'><span style='font-size:10.0pt;'><a href='mailto:$Email'>$Email</a></span> </p></td>
				</tr>
				<tr>
				  <td style='border:solid #beeae4 1.0pt;border-top:0pt;border-right:0pt;background:#ffffff;padding:2.25pt 2.25pt 2.25pt 2.25pt;width:35%;'><p style='margin:2pt 0pt 2pt 0pt;'><b><span style='font-size:10.0pt;'>Telephone</span></b>
					  <o:p></o:p>
					</p></td>
				  <td style='border:solid #beeae4 1.0pt;border-top:0pt;background:#ffffff;padding:2.25pt 2.25pt 2.25pt 5pt'><p style='margin:2pt 0pt 2pt 0pt;'><span style='font-size:10.0pt;'><a href='tel:$phone'>$phone</a></span> </p></td>
				</tr>
				<tr>
				  <td style='border:solid #beeae4 1.0pt;border-right:0pt;border-top:0pt;background:#ffffff;padding:2.25pt 2.25pt 2.25pt 2.25pt;width:35%;'><p style='margin:2pt 0pt 2pt 0pt;'><b><span style='font-size:10.0pt;'>Description of your requirement</span></b></p></td>
				  <td style='border:solid #beeae4 1.0pt;border-top:0pt;background:#ffffff;padding:2.25pt 2.25pt 2.25pt 5pt'><p style='margin:2pt 0pt 2pt 0pt;'><span style='font-size:10.0pt;'>$description</span>
					  <o:p></o:p>
					</p></td>
				</tr>
				<tr style='height:3.75pt'>
				  <td style='border:0pt;background:#ffffff;padding:15pt 2.25pt 2.25pt 2.25pt;height:3.75pt'><span style='font-size:10.5pt;color:#323232'><b>Thank you!</b><br>
					<b>Team SmartPhotoEdits</b></span></td>
				  <td style='border:0pt; text-align:right;background:#ffffff;padding:15pt 2.25pt 2.25pt 2.25pt;height:3.75pt'><b><a href='https://www.smartphotoedits.com'><span style='color:#0072B5'>www.smartphotoedits.com</span></a></b></td>
				</tr>
			  </table></td>
		  </tr>
		  <tr>
			<td style='border:solid #f3f3f1 1.0pt;border-top:none;padding:0in 0in 0in 0in'></td>
		  </tr>
		</table>
		</body>
		</html>
		";
}

if ($auto_respond=='1' && $spamcheck_field=='')
{	
	$mail->Subject = $subject_line;
	$mail->addCustomHeader("X-Originating-IP: " . $ip);
	$mail->clearAllRecipients();
    $mail->clearCCs();
	$mail->setFrom('info@smartphotoedits.com', 'SmartPhotoEdits');
	$mail->addAddress($Email, $FirstName);     							// Add a recipient
	$mail->send();
	
}

//exit();

//If its not a spam go to thanks page else go to thank_submitted page.
if ($intspamid=='ok' && $bypasstrigger=='NO')
{
//	echo "<META HTTP-EQUIV='refresh' CONTENT='0;URL=http://".$_SERVER['HTTP_HOST']."/forms/thanks.php'>";
	$response = array(
        'status' => true,
        'message' => 'Success'
    );
    echo json_encode($response);
}
else
{
	$response = array(
        'status' => true,
        'message' => 'Success'
    );
    echo json_encode($response);
//	echo "<META HTTP-EQUIV='refresh' CONTENT='0;URL=http://".$_SERVER['HTTP_HOST']."/forms/thanks-submitted.php'>";
}
?>

