document.addEventListener('DOMContentLoaded', () => {
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.

  const players = Plyr.setup('#player', {
    controls: [
      // "play-large", // The large play button in the center
      // "restart", // Restart playback
      // "rewind", // Rewind by the seek time (default 10 seconds)
      //'play', // Play/pause playback
      // "fast-forward", // Fast forward by the seek time (default 10 seconds)
      // "progress", // The progress bar and scrubber for playback and buffering
      // "current-time", // The current time of playback
      // "duration", // The full duration of the media
      // 'mute', // Toggle mute
      //"volume", // Volume control
      // "captions", // Toggle captions
      // "settings", // Settings menu
      // "pip", // Picture-in-picture (currently Safari only)
      // "airplay", // Airplay (currently Safari only)
      // "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
      //"fullscreen", // Toggle fullscreen
    ],
    clickToPlay: false,
  });

  // Expose
  window.player = player;

  const videoPlayer = document.querySelectorAll('.plyr');

  videoPlayer.forEach((player, index) => {
    player.addEventListener('mouseover', () => {
      players[index].play();
    });

    player.addEventListener('mouseleave', () => {
      players[index].stop();
    });
  });

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});

// players.forEach((videoEmbed) => console.log(videoEmbed));
