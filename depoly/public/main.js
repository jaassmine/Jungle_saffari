function alertMe(){
    alert('I have been clicked');
}

function WolfSound(){
    const audio = new Audio("./sounds/wolf.mp3");
    audio.play() ;
     alert('I have been clicked');
}

function lionSound(){
    const audio = new Audio("./sounds/lion.mp3");
    audio.play() ;
    
}

function elephantSound(){
    const audio = new Audio("./sounds/elephant.mp3");
    audio.play() ;
}

function crocodileSound(){
    const audio = new Audio("./sounds/crocodile.mp3");
    audio.play() ;
}

const audio = new Audio("./sounds/junglemusic.mp3");
    
function playJungleSound(){
    audio.play() ;  
}

function pause(){
    audio.pause();
}
