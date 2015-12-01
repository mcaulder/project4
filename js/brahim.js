// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=CLIENT_ID_HERE&redirect_uri=REDIRECT_URI_HERE&response_type=token

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id


$(function() {

	var apiurl = "https://api.instagram.com/v1/tags/BrahimAbdeslam/media/recent?access_token=815628801.7441992.f01fbb22352140d78dbf9206602c0c79&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});


		function parseData(json){
			console.log(json);

			$.each(json.data,function(i,data){
							html += '<a href="' + data.link + '" target="_blank" title="' + data.caption.text + '"><img src ="' + data.images.thumbnail.url + '"> </a>'
						});

			console.log(html);
			$("#brahimm").append(html);

		}

		 });
