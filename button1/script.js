$(document).ready(function(){

	console.log ("hello there!");


var playlist = [
    'Lil Yachty [ Sprite Commercial  2016 ].mp4',
    'Big Baby D.R.A.M. - Broccoli feat. Lil Yachty (Official Music Video).mp4',
    'Lil Yachty - 1 NIGHT (Official Video).mp4'

  ];

  for (var i=0; i < playlist.length; i++){
    $('#monSelect').append('<option value="'+ playlist[i] +'">'+ i +'</option>');
  }
  var currentVideoIndex = 0;
  function getNextVideoInPlaylist() {
    var nextUrl = playlist[(currentVideoIndex % playlist.length)]
    $('#playerVideo').attr('src', nextUrl);
    $('#playerVideo')[0].play();
    currentVideoIndex++;
  }
  $('#playPauseVideo').on('click', function(e) {
  	$(this).toggleClass("active");
    if($('#playerVideo')[0].paused){
      $('#playerVideo')[0].play();
    }else{
      $('#playerVideo')[0].pause();
    }
  });
  $('#changeVideo').on('click', function(e) {
    getNextVideoInPlaylist()
    $(this).toggleClass("active2");
  });
  $('#playerVideo').on('timeupdate', function(e) {
    $('#progress--bar').attr('max', this.duration);
    $('#progress--bar').val(this.currentTime);
  });
  
 
});
 
                

