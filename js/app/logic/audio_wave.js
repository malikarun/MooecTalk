$(document).on('initialize-wavesurfer', function(){
  if (typeof(app.wavesurfer) == 'undefined'){
    app.wavesurfer = Object.create(WaveSurfer);
  }

  app.wavesurfer.init({
    container: document.querySelector('#wave'),
    waveColor: 'gray',
    progressColor: 'green',
    dragSelection: false
  });

  // app.wavesurfer.loadBlob('files/audio/curse.mp3');
  app.wavesurfer.load('https://dtbhzdanf36fd.cloudfront.net/uploads/admin/mooec/User/29845/intro_original.wav?1400797358');

  app.wavesurfer.on('ready', function () {
    console.log('in the ready function');
  });

  app.wavesurfer.on('progress', function (progress) {
    if (progress > 0.99){
      app.wavesurfer.stop();
    }
  });

  app.wavesurfer.on('error', function (err) {
    console.error(err);
    console.log(err);
  });

  $(document).on('click', '.play-button', function(){
    app.wavesurfer.playPause();
  });
});
