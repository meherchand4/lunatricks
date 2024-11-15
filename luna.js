window.onload = function() {
    const play_button = document.getElementById('playButton');
    const vid = document.getElementById('vidElem');
    const pause_button = document.getElementById('pauseButton');
    const forward_button = document.getElementById('forwardButton');
    const header = document.querySelector('h1');
    const trick_menu = document.querySelector('#trickMenu');
    let show_button = document.querySelector('#showButton');


    play_button.addEventListener('click', function() {
        vid.play();
        
    });
    
    pause_button.addEventListener('click', function() {
        vid.pause();
    });

    forward_button.addEventListener('click', function() {
        vid.playbackRate = 2
    });

    
    vid.addEventListener('ended', function() {
        header.innerHTML = 'All done! Give Luna a Treat.';
    });

   show_button.addEventListener('click', function(){
        if (trick_menu.value == 'Sit') {
            vid.currentTime = 4;
            vid.play();
        };

        if (trick_menu.value == 'Paw') {
            vid.currentTime = 5;
            vid.play();
        };

        if (trick_menu.value == 'Down') {
            vid.currentTime = 10;
        };

        if (trick_menu.value == 'Roll') {
            vid.currentTime = 12;
        };
    
   });

    



}