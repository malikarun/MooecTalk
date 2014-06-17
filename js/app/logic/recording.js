$(document).on('initialize-wavesurfer', function(){
  //recording options
  var options = { limit: 2, duration: 10 };

  // Called when capture operation is finished
  function captureSuccess(mediaFiles) {
    console.log('operation captureSuccess');
    var i, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
     new Audio(mediaFiles[i]).play();
    }
    navigator.notification.alert('captureSuccess', null, 'Well Done!');
  }

  // Called if something bad happens.
  function captureError(error) {
    var msg = 'An error occurred during capture: ' + error.code;
    navigator.notification.alert(msg, null, 'Uh oh!');
  }

  // A button will call this function
  $(document).on('click', '.recording-button', function(){
    console.log('microphone clicked');
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
  });
});