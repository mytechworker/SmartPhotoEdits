<?php
//	$string = $HTTP_COOKIE_VARS["CSCOMPOUND"];
	$string = NULL;
//	$bits = split("[*]",$string);
	$bro_check = $_SERVER['HTTP_USER_AGENT'];
	$intspamid='ok';
    $bypasstrigger = 'NO';  // Bypass DB and email

// Email Address Valid
function valid_email($address)
	{
		if (!filter_var($address, FILTER_VALIDATE_EMAIL))
		{ 
            return false;
        }else{
            return true;
        }
	}
//One word in description
function one_word_desc($description){
	$word_count = str_word_count($description);
	//echo $word_count;
	if($word_count > 1){
		return false;
	} else {
		return true;
	}
}

if(isset($statsid) || $statsid == "Not Specified")
{
	if ((valid_email($Email)) && (!valid_email($phone)))
	{
		// To check for spam in decription text
		$string = $description;
		$s_viagra = stristr($string, 'viagra');
		$s_phentermine = stristr($string, 'phentermine');
		$s_levitra = stristr($string, 'levitra');
		$s_meridia = stristr($string, 'meridia');
		$s_vicodin = stristr($string, 'vicodin');
		$s_xenical = stristr($string, 'xenical');
		$s_porn = stristr($string, 'porn');
		$s_nude = stristr($string, 'nude');
		$s_pharmaduk = stristr($string, 'pharmaduk');
		$s_ringtones = stristr($string, 'ringtones');
		$s_cialis = stristr($string, 'cialis');   //specialising is also triggering email SPAM, need to check this
		$s_paradise = stristr($string, 'paradise lost');
		$s_medicare = stristr($string, 'humana medicare drug');
		$s_girls = stristr($string, 'girls');
		$s_clicktrack = stristr($bro_check, 'CLICKTRACKS');
		$s_sex = stristr($string, 'sex');
		$s_tamiflu = stristr($string, 'tamiflu');
		$s_naked = stristr($string, 'naked');
		$s_naughty = stristr($string, 'naughty');
		$s_topless = stristr($string, 'topless');
		$s_fuck = stristr($string, 'fuck');
		$s_oeth = stristr($string, 'ð');
		$s_very_nice_site = stristr($string, 'Very nice site!');
		$s_just_for_fun = stristr($string, 'Just for fun');
		$s_exec = stristr($string, 'exec');
		$s_cmpdshell = stristr($string, 'cmpdshell');
		$s_varchar = stristr($string, 'varchar');
		$s_select = stristr($string, 'select');
		$s_EnterYourRequirements = stristr($string, 'Enter your requirements*');
		$s_Enjoy = stristr($string, 'enjoy');
		$s_LikeYourSite = stristr($string, 'like your site');
		$s_www_QS3 = stristr($string, 'http://www.QS3');
        $bitly_in_desc = stristr($string, 'https://bit.ly');
		$tinyurl_in_desc = stristr($string, 'https://tinyurl.com');
		$s_www_FyLitCl7P = stristr($string, 'FyLitCl7Pf7kjQdDUOLQOuaxTXbj5iNG');
		$s_amp_ash = stristr($string, '&#');
		$description_notvalid1 = stristr($string, 'Description*');
		$description_notvalid2 = stristr($string, 'Description');
		$description_notspecified = stristr($string, 'Not Specified');
		$bitcoin_in_description = stristr($string, 'bitcoin');
		$crypto_in_description = stristr($string, 'crypto');
		$traffic_in_description = stristr($string, 'traffic');
		$seo_in_description = stristr($string, 'seo');
		$muchas_in_description = stristr($string, 'Muchas gracias');


		//Checking for the Company Text Field
		$c_acunetix_check = stristr($company, 'Acunetix');
        
        //Checking for the Company Text Field
		$c_googlec_check = stristr($company, 'Google');
		
		//Checking for special characters 
		$special_char_check1 = substr_count($string,"Ð");

		//Checking if more than one <a href=""> tag in the description field.
		$href_check = substr_count(strtoupper($string),strtoupper("<a href="));
		$href_check1 = substr_count(strtoupper($string),strtoupper("a href="));
		$http_check = substr_count(strtoupper($string),strtoupper("http"));
		$www_check = substr_count(strtoupper($string),strtoupper("www"));
		$mailto_check = substr_count(strtoupper($string),strtoupper("<a mailto="));
		$mailto_check1 = substr_count(strtoupper($string),strtoupper("a mailto="));
		$questionmarkcheck = substr_count(strtoupper($string),strtoupper("?"));

		//To check if the Firstname has the value Larcik
		$larcik_check = stristr($FirstName, 'Larcik');

		//To check if the Firstname has the value sweetpea
		$sweetpea_check = stristr($FirstName, 'sweetpea');

		//To check if the Firstname has the value birkoff
		$birkoff_check = stristr($FirstName, 'birkoff');
        
        //To check if the Firstname has the value patrica_ dolan
		$patrica_check = stristr($FirstName, 'Patricia Dolan');

		//To check if the Firstname has the value wow gold
		$wow_gold_check = stristr($FirstName, 'wow gold');
        
        //To check if the Firstname has the value Henrydes
		$Henrydes_check = stristr($FirstName, 'Henrydes');
        
        //To check if the Firstname has the value HenryLog_check
		$HenryLog_check = stristr($FirstName, 'HenryLog');
        
        //To check if the Firstname has the value Kelly Rogers
		$kellyrogers_check = stristr($FirstName, 'Kelly Rogers');

		//To check if the Firstname has the value Dating
		$dating_check = stristr($FirstName, 'Dating');

		//To check if the Firstname has the value Free
		$free_check = stristr($FirstName, 'Free');

		//To check if the Firstname has the value Sites
		$sites_check = stristr($FirstName, 'Sites');

		//To check if the Firstname has the value Protolika
		$Protolika_check = stristr($FirstName, 'Protolika');
        
		//To check if the Firstname has the value Rosanase
		$Rosanase_check = stristr($FirstName, 'Rosanase');

		//To check if the Firstname has the value ????????
		$firstname_questionmarkcheck = substr_count(strtoupper($FirstName),strtoupper("?"));

		//To Block if the IP Address has the value 85.255.120.210
		$ip_block1 = stristr($ip, "85.255.120.210");

		//To Block if the IP Address has the value 92.113.21.132
		$ip_block2 = stristr($ip, "92.113.21.132");

		//To Block if the IP Address has the value 209.239.43.18
		$ip_block3 = stristr($ip, "209.239.43.18");

		//To Block if the IP Address has the value 195.191.55.53
		$ip_block4 = stristr($ip, "195.191.55.53");

		//To Block if the IP Address has the value 178.239.58.133
		$ip_block5 = stristr($ip, "178.239.58.133");

		//To Block if the IP Address has the value 188.143.232.80
		$ip_block6 = stristr($ip, "188.143.232.80");

		//To Block if the IP Address has the value 94.23.33.36
		$ip_block7 = stristr($ip, "94.23.33.36");

		//To Block if the IP Address has the value 188.143.232.84
		$ip_block8 = stristr($ip, "188.143.232.84");

		//To Block if the IP Address has the value 93.114.43.102
		$ip_block9 = stristr($ip, "93.114.43.102");

		//To Block if the IP Address has the value 166.78.108.172
		$ip_block10 = stristr($ip, "166.78.108.172");

		//To Block if the IP Address has the value 94.23.238.222
		$ip_block11 = stristr($ip, "94.23.238.222");
		
		//To Block if the IP Address has the value 91.236.74.165
		$ip_block12 = stristr($ip, "91.236.74.165");
		
		//To Block if the IP Address has the value 178.159.37.56
		$ip_block13 = stristr($ip, "178.159.37.56");
		
		//To Block if the IP Address has the value 151.249.164.95
		$ip_block14 = stristr($ip, "151.249.164.95");
		
		//To Block if the IP Address has the value 5.188.210.63
		$ip_block15 = stristr($ip, "5.188.210.63");
		
		//To Block if the IP Address has the value 47.8.126.149
		$spam_attack_ip01 = stristr($ip, "47.8.126.149");

		//To Block if the email has the domain @Cheatcc.com
		$mail_block2 = stristr($Email, "@Cheatcc.com");

		//To Block if the email has the domain @funkytimes.com
		$mail_block3 = stristr($Email, "@funkytimes.com");

		//To Block if the email has the value lovesing@
		$mail_block4 = stristr($Email, "lovesing@");

		//To Block if the email has the value dontreplyhere@nodomain.com
		$mail_block5 = stristr($Email, "dontreplyhere@nodomain.com");

		//To Block if the email has the value sample@email.tst
		$mail_block6 = stristr($Email, "sample@email.tst");
		
		//To Block if the email has the value health@healthgyan.in
		$mail_block7 = stristr($Email, "health@healthgyan.in");
		
		//To Block if the email has the value kiuu60twy@mail.ru
		$mail_block8 = stristr($Email, "kiuu60twy@mail.ru");
		
		$qq_string = stristr($Email, "@qq.com");
		
		//To Block if the email has the value sex
		$sex_email_string = stristr($Email, "sex");
        
        //To Block if the email has the value info@smartphotoedits.com
		$infosite_email_string = stristr($Email, "info@smartphotoedits.com");

		//To Block if the phone has the value 12345 for the phone field
		$phone_block1 = stristr($phone, "123456");

		//To Block if the phone has the value hhfgdgdf for the phone field
		$phone_block2 = stristr($phone, "hhfgdgdf");

		//To Block if the phone has the value Telephone* for the phone field
		$phone_block3 = stristr($phone, "Telephone*");

		//To Block if the phone has the value Phone* for the phone field
		$phone_block5 = stristr($phone, "Phone*");
		
		//To Block if the phone has the value http:// for the phone field
		$phone_block6 = stristr($phone, 'http://');

		//To Block if the phone has the value www. for the phone field
		$phone_block7 = stristr($phone, 'www');

		//To Block if the phone has less than equal to 5 Numeric Character
		preg_match_all('/[0-9]/', $phone, $match_only_number);
		$phone_block8 = count($match_only_number[0]);
	
		//To Block if the phone has the value 555-666-0606 for the phone field
		$phone_block9 = stristr($phone, '555-666-0606');

		//To Block if the phone field has more than 10 Alphabet Characters
		preg_match_all('/[A-Za-z]/', $phone, $match_only_alphabets);
		$phone_block10 = count($match_only_alphabets[0]);
		
		//To Block if the phone has the value 341826383 for the phone field
		$phone_block11 = stristr($phone, '341826383');
        
        //To Block if the phone has the value +1 213 425 1453 for the phone field
		$phone_block12 = stristr($phone, '+1 213 425 1453');
        
        //if country is india
		$india_country = stristr($country, 'India');
        
        //if country is Ukraine
		$ukraine_country = stristr($country, 'Ukraine');
        
        //if country is Russia
		$russia_country = stristr($country, 'Russia');
        
        //if country is Lithuania
		$lithuania_country = stristr($country, 'Lithuania');
		
        if(($HenryLog_check !="") || ($Rosanase_check !="") || ($Henrydes_check !="") || ($muchas_in_description != "") || ($Protolika_check !="") || ($ip_block14 !="") || ($c_googlec_check!="") || ($description_notspecified != "") || ($spam_attack_ip01 !="") || ($infosite_email_string !="")){
            //Bypass Db and Mail - This is for SPAM attack
            $intspamid='NO';
            $bypasstrigger = 'YES';
        }
		elseif (($s_viagra!="") || ($s_phentermine!="") || ($s_levitra!="") || ($s_meridia!="") || ($s_vicodin!="") || ($s_xenical!="") || ($s_porn!="") || ($s_nude!="") || ($s_pharmaduk!="") || ($s_ringtones!="") || ($s_cialis!="") || ($s_paradise!="") || ($s_medicare!="") || ($s_girls!="") || ($s_clicktrack!="") || ($s_sex!="") || ($s_tamiflu!="") || ($s_naked!="") || ($s_naughty!="") || ($s_topless!="") || ($s_fuck!="") || ($s_oeth!="") || ($s_very_nice_site!="") || ($s_just_for_fun!="") || ($s_exec!="") || ($s_cmpdshell!="") || ($s_varchar!="") || ($s_select!="") || ($s_EnterYourRequirements!="") || ($s_Enjoy!="") || ($s_LikeYourSite!="") || ($s_www_QS3!="") || ($bitly_in_desc!="") || ($tinyurl_in_desc!="") || ($s_www_FyLitCl7P!="") || ($s_amp_ash!="")  || ($description_notvalid1!="") || ($description_notvalid2!="") || ($bitcoin_in_description != "") || ($sex_email_string !="") || ($crypto_in_description != "") || ($traffic_in_description != "") || ($seo_in_description != "") || ($c_acunetix_check!="") || ($qq_string !="") || ($href_check >= 1) || ($href_check1 >= 1) || ($http_check >= 4) || ($www_check >= 4) || ($mailto_check >= 1) || ($mailto_check1 >= 1) || ($questionmarkcheck >= 10) || ($c_url_des_check !="") || ($larcik_check !="") || ($sweetpea_check !="") || ($birkoff_check !="")  || ($patrica_check !="") || ($kellyrogers_check !="") || ($wow_gold_check !="") || ($dating_check !="") || ($free_check !="") || ($sites_check !="") || ($firstname_questionmarkcheck >= 3) || ($ip_block1 !="") || ($ip_block2 !="") || ($ip_block3 !="") || ($ip_block4 !="") || ($ip_block5 !="") || ($ip_block6 !="") || ($ip_block7 !="") || ($ip_block8 !="") || ($ip_block9 !="") || ($ip_block10 !="") || ($ip_block11 !="") || ($ip_block12 !="") || ($ip_block13 !="") || ($ip_block14 !="") || ($mail_block2 !="") || ($mail_block3 !="") || ($mail_block4 !="") || ($mail_block5 !="") || ($mail_block6 !="") || ($mail_block7 !="") || ($mail_block8 !="") || ($phone_block1 !="") || ($phone_block2 !="") || ($phone_block3 !="") || ($phone_block5 !="") || ($phone_block6 !="") || ($phone_block7 !="") || ($phone_block8 <= "5") || ($phone_block9 !="") || ($phone_block10 >= "10") || ($phone_block11 != "") || ($phone_block12 != "") || ($special_char_check1 >= "10") || ($india_country!="") || ($ukraine_country!="") || ($russia_country!="") || ($lithuania_country!=""))
		{
			$intspamid='NO';
            $bypasstrigger = 'NO';
//			echo "first NO";
//			exit();
			//$checkwhich="first No"; so this is spam mail
		}
        
		elseif(preg_match("/^[a-zA-Z ]+$/", $phone) == 1)
		{
			$intspamid='NO';
//			echo "Here phone";
			//exit();
		}
		// Numbers in Firstname are sent to SPAM
		elseif (preg_match('~[0-9]+~', $FirstName) == TRUE) {
			$intspamid='NO';
//			echo "Here First Name has Number";
//			exit();
		}
		elseif(one_word_desc($description) == TRUE){
			$intspamid='NO';
//			echo "One word spam check";
//			exit();
		}
		else
		{
			//$intspamid='ok';
			//$checkwhich="first ok";	so this is not a spam mail

			//To check if the Name is Korent
			if (strtoupper($FirstName) == strtoupper("korent") || strtoupper($LastName) == strtoupper("korent") || strtoupper($FirstName) == strtoupper("kistov") || strtoupper($LastName) == strtoupper("kistov"))
			{
				$intspamid='NO';
				//echo "first NO";
				//exit();
			}
			else
			{
				$intspamid='ok';
			}
			//End of to check the Name is Korent

		}
	}
	else
	{
		$intspamid='NO';
//		echo "first NO";
//		exit();
		//$checkwhich="second No";
	}
} 
else
{
	$intspamid='NO';
//	echo "first NO";
//	exit();
	//$checkwhich="third No";
}

	 //e-mail validation function 
//	function valid_email($address)
//	{
//		if (!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$", $address))
//		{ return false;}else{return true;}
//	}
?>