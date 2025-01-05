// $(document).ready(function(){
//     alert('Hello');
// });

var blue = new Audio('sounds/blue.mp3');
var allbuttons = document.querySelectorAll('.btn');
// var btnl = allbuttons.length();
var level = 0;
var counter = 0;

var track = [];
var utrack = [];

$(document).on('keydown',function(e){
        if(e.key === 'a'){
            startGame();
            takeUser();
            console.log('Track: '+track + ', Utrack :' + utrack);
            checkSequence(utrack,track);
        }    
    }
);

function startGame(){
    var guess = Math.floor(Math.random() * 4);
    track.push(guess);
    $('#level-title').text('Level '+(track.length));
    var guessId = allbuttons[guess].id;
    playSound(guessId);
    animate(guessId);
    console.log('Track: '+allbuttons[track[0]].id,guessId);
}


function takeUser(){
    $('.btn').off('click').on('click', function(e) {
        playSound(e.target.id);
        animate(e.target.id);
        console.log('User: '+e.target.id);
        utrack.push(e.target.id);
        console.log('UTrack: '+ utrack.length);
        for (var i = 0; i < utrack.length; i++) {
            if (utrack[i] !== allbuttons[track[i]].id) {
                console.log('Wrong');
                playSound('over');
                $('body').addClass('game-over');
                setTimeout(function(){
                    $('body').removeClass('game-over');
                },200);
                utrack = [];
                track = [];
                $('#level-title').text('Game Over, Press A to Restart');
                return;
            }
        }

        if (utrack.length === track.length) {
            utrack = [];
            setTimeout(startGame, 1000);
        }

    });
}

function checkSequence(utrack,track){
    if(utrack[0] === allbuttons[track[0]].id){
        console.log('Correct');
    }
}


function playSound(id) {
    switch(id) {
        case "blue":
            var blue = new Audio('sounds/blue.mp3');
            blue.play();
            break;
        case "red":
            var red = new Audio('sounds/red.mp3');
            red.play();
            break;
        case "green":
            var green = new Audio('sounds/green.mp3');
            green.play();
            break;
        case "yellow":
            var yellow = new Audio('sounds/yellow.mp3');
            yellow.play();
            break;
        case "over":
            var yellow = new Audio('sounds/wrong.mp3');
            yellow.play();
            break;
    }
}


function animate(id){
    $('#'+id).addClass("pressed");
    setTimeout(function(){
        $('#'+id).removeClass("pressed");
    },200);
}


// for(var i = 0; i < track.length; i++){
//     for(var u = 0; u < utrack.length; u++){
//         console.log(allbuttons[track[i]]);
//         if(utrack[u] === allbuttons[track[i]].id){
//             console.log('Correct');
//             console.log(track.length);
//             utrack.length = 0;
            
//         } else{
//             $('#level-title').text('Game over Baby Press Any Key to Start');
//             $('body').addClass('game-over');
//             playSound('over');
//             setTimeout(function(){
//                 $('body').removeClass('game-over');
//             },200);
//             track.length = 0;
//         }
//         var guess = Math.floor(Math.random() * 4);
//             track.push(guess);
//             $('#level-title').text('Level '+(track.length));
//             var guessId = allbuttons[track.length - 1].id;
//             playSound(guessId);
//             animate(guessId);
//     }
// }





// for(var i = 0; i < allbuttons.length; i++ ) {
//     allbuttons[i].addEventListener('click', function(e){
//         console.log(this.id);
//         blue.play();
//     })
// }