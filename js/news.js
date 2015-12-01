var nytdata = ""  // global string to hold html data

function loadNews(){
     //$.scrollUp('#scrollUp');
    var apinyt = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=paris&begin_date=20151113&end_date=20151171&api-key=f609f52822791f5d04549f6ac2ffc9a5:1:73530506"

     $.getJSON(apinyt,function(data){
                var times = data.response.docs;

                 $.each(times,function(i,data){

                   nytdata += '<h4><a class="nyt-links" href="' + data.web_url + '">' + data.headline.main + '</a></h4>';

                   if (data.byline) {
                    nytdata += data.byline.original  + " | ";
                    }

                   nytdata += 'Published: ' + data.pub_date + '<br/>';
                   nytdata += '<p>' + data.snippet +'</p>';
                   nytdata += '<hr>'
                    });

                //after loop code
                $("#nytimes").append(nytdata);
            });


    loadOpenLibrary();
}

//load Guardian news data
function loadOpenLibrary() {

var apiguardian = "http://content.guardianapis.com/search?api-key=n2fkptej7nzynq3cy5fjw2ab&q=paris&from-date=2015-11-13";

$.ajax({
  type: "GET",
  url: "http://content.guardianapis.com/search?api-key=n2fkptej7nzynq3cy5fjw2ab&q=paris&from-date=2015-11-13",
  dataType: "jsonp",
  crossDomain: true,
  success: loadGuardian
});

}
var guardiandata ="";

function loadGuardian(data) {

    var results = data.response.results;

     var guardianDate = data.response.results.webPublicationDate;

           $.each(results, function(index,results){

               guardiandata += '<br><h4><a class="nyt-links" href="' + data.response.results[index].webUrl + '">' + data.response.results[index].webTitle + '</a></h4>';
              guardiandata += '<h5>Published: ' + results.webPublicationDate + '</h5>';
              guardiandata += '<hr>';

           });



         $("#guardian").append(guardiandata);

      loadGoogleNews();
}

function loadGoogleNews(){
  var googledata = "";
  var params = 'v=1.0&q=paris%20attack&start-date=2015-11-13&end-date=2015-11-17';
  $.ajax({
            data: params,
            url: 'https://ajax.googleapis.com/ajax/services/search/news?',
            type: 'get',
            dataType: 'jsonp',
            crossDomain: true,
            success:  function (response, textStatus, jqXHR) {
              var articles = response.responseData.results;
                for(var key in articles){
                    if (articles.hasOwnProperty(key)){
                        var value=articles[key];
                        var image = value.image;

                        googledata += '<h4><a class="nyt-links" href="' + value.unescapedUrl + '">' + value.titleNoFormatting + '</a></h4>';

                        googledata += '<h5 class="news-outlet">Source: ' + value.publisher + " | ";
                        googledata += 'Published: ' + value.publishedDate + '</h5>';
                        googledata += '<p>' + value.content +'</p>';
                        googledata += '<hr>'

                    }
                }
          $("#google").append(googledata);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#error").text(textStatus + "; " + errorThrown);
        }
    });

    callFlickr();
}
