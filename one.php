<html>
    <head>
        <meta charset="UTF-8">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
         <link rel="stylesheet" href="css/twitter.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<script src="js/tweetLinkIt.js"></script>
    </head>
    <body>
       <script>

    function pageComplete(){
        $('.tweet-content').tweetLinkify();
    }


</script>




<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "4158436456-sRbMI9kwwCw01RMwVUynpMZ0Av8RLUNvNrem8A9",
    'oauth_access_token_secret' => "6zvnkSnENHAtIyfH0666ndU4pQ3w41eLJN2SkxJUsVBTT",
    'consumer_key' => "AJ8EbjVyvcEziFG33YI4ocLPL",
    'consumer_secret' => "g4pKyUaGihsMhIVPROjGuEQmA0p4ZIZi5Nv2GRKQmLd138bAHg"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
// $url = 'https://api.twitter.com/1.1/search/tweets.json';
// $requestMethod = 'POST';
//
// /** POST fields required by the URL above. See relevant docs as above **/
// $postfields = array(
//     'screen_name' => 'usernameToBlock',
//     'skip_status' => '1'
// );
//
// /** Perform a POST request and echo the response **/
 // $twitter = new TwitterAPIExchange($settings);
 // echo $twitter->buildOauth($url, $requestMethod)
 //              ->setPostfields($postfields)
 //              ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/

$url = "https://api.twitter.com/1.1/search/tweets.json";
$requestMethod = "GET";
if (isset($_GET['user']))  {$user = $_GET['user'];}  else {$user  = "SalahAbdeslam";}
if (isset($_GET['count'])) {$count = $_GET['count'];} else {$count = 20;}
$getfield = "?q=%23ISIS&count=20";
$twitter = new TwitterAPIExchange($settings);
$string = json_decode($twitter->setGetfield($getfield)
->buildOauth($url, $requestMethod)
->performRequest(),$assoc = TRUE);



foreach($string['statuses'] as $items)
    {

        $userArray = $items['user'];
        $entitiesArray = $items['entities'];
        $mediaArray = $entitiesArray['media'];
        $tweetMedia = $mediaArray[0];

        echo "<div class='tweet'><div class='tweet-header'><img src='" . $items['user']['profile_image_url'] . "' >";
        echo "<strong> ". $items['user']['name']."</strong>";
        echo "<span class='screen-name'>   @". $items['user']['screen_name']."</span></div>";
        echo "<div class='tweet-content'><p>". $items['text']. "</p>";

        echo $items['place']['name']."</div>";
         echo "<a target='_blank' href='http://www.twitter.com/" . $tweetMedia['media_url'] . "'><img class='twitter-pic' target='_blank' src='" . $tweetMedia['media_url'] . "'></a></div>";

    }
    echo "<script>pageComplete();</script>";
    //echo "<script>removeImg();</script>";
?>
</body>
</html>
