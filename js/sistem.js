
    var sound = new Howl({
      src: ['../audio/Final Fantasy IV.mp3'],
      volume: 1.0,
      onend: function () {
        alert('We finished with the setup!');
      }
    });
    sound.play()
