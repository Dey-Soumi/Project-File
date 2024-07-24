console.log("welcome To Spotify");
//initialize the variable
let songIndex=0;
let audioElement=new Audio('son/2.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressBar=document.getElementById('progressBar');
let gif=document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
 {songName:"salami-e-ishq",filePath:"son/2.mp3",coverPath:"cov/cov.10.jpg"},
 {songName:"Mahambad bharsha da na tu",filePath:"sons/3.mp3",coverPath:"cov/cov.10.jpg"},
 {songName:"rang de garua",filePath:"son/2.mp3",coverPath:"cov/cov.10.jpg"},
 {songName:"rang de garua",filePath:"son/2.mp3",coverPath:"cov/cov.10.jpg"},
 


]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = son[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

//handle play/ pause click
masterPlay.addEventListener('click',()=>
    {

    if(audioElement.paused || audioElement.currentTime<=0)
        {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        }
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
    }

    })
//listen to events

audioElement.addEventListener('timeupdate',()=>{

    //console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress)
    progressBar.value=progress;
    
})

progressBar.addEventListener('change',()=>{

audioElement.currentTime=progressBar.value * audioElement.duration/100;

})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})




