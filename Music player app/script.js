let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let controlIcon = document.querySelector("#ctrlIcon");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }else{
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}


// if (song.play()) {
//     setInterval(()=>{
//         progress.value   = song.currentTime;
//     },500);
    
// }


// Update progress bar while song is playing
song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
    // document.querySelector("#show").innerHTML = Math.floor(Math.random()*99)
});

// progress.onchange = function(){
//     song.play();
//     song.currentTime = progress.value;
//     controlIcon.classList.add("fa-pause");
//     controlIcon.classList.remove("fa-play");
// }
progress.oninput = function () {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
};




