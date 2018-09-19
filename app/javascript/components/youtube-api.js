console.log('Hello World from Webpacker')

var channelID = 'UCW5JmM9tkJskWOmggA7ntJw'

$(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",{
      part: 'contentDetails',
      id: channelID,
      key: 'AIzaSyBiBqrlAqc0ZPiur8d39fPSRH5JWVf63oQ'},
      function(data){
          console.log(data)
          $.each(data.items, function(i, item){
            pid = item.contentDetails.relatedPlaylists.uploads;
            getVids(pid);

          })
      }

  );

  function getVids(pid) {
    $.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",{
      part: 'snippet',
      maxResults: 3,
      playlistId: pid,
      key: 'AIzaSyBiBqrlAqc0ZPiur8d39fPSRH5JWVf63oQ'},
      function(data){
        var output;
          $.each(data.items, function(i, item){
            videoTitle = item.snippet.title;
            videoId = item.snippet.resourceId.videoId;

            output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';

            //Append to results listStyleType
            $('#results').append(output);

          })
      }

  );

  }
});



