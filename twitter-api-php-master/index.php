<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "4158436456-sRbMI9kwwCw01RMwVUynpMZ0Av8RLUNvNrem8A9",
    'oauth_access_token_secret' => "6zvnkSnENHAtIyfH0666ndU4pQ3w41eLJN2SkxJUsVBTT",
    'consumer_key' => "AJ8EbjVyvcEziFG33YI4ocLPL",
    'consumer_secret' => "6zvnkSnENHAtIyfH0666ndU4pQ3w41eLJN2SkxJUsVBTT
"
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
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=unc';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
