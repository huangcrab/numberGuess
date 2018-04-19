let min = 1, 
    max = 10,
    win = getRandonNum(min, max),
    left = 3;
    console.log(win);
const UIgame = document.querySelector('#game'),
      UImin = document.querySelector('.min-num'),
      UImax = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

UImin.textContent = min;
UImax.textContent = max;

UIgame.addEventListener('mousedown', function(e){
    if(e.target.className.indexOf('play-again')!=-1){
        window.location.reload();
    }
});

UIguessBtn.addEventListener('click', function(){

    let guess = parseInt(UIguessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }else{
        if(guess === win){
            //win
            gameOver(true,`${win} is Correct. You win!`);
    
        }else{
            //wrong
            left -= 1;
            if(left === 0){
                //game lost
                gameOver(false,`${left} chances left. Game Over! Correct Number was ${win}`);
            }else{
                //game continue
                
                //clear input
                UIguessInput.value = '';
                setMessage(guess > win ? `${guess} is too big. `:`${guess} is too small. `+`${left} chances left`,'red');   
            }
            
        }
    }
    
});
function getRandonNum(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
}

function gameOver(win, msg) {
    UIguessInput.disabled = true;
    UIguessInput.style.borderColor = win ? 'green':'red';
    setMessage(msg,UIguessInput.style.borderColor);
    UIguessBtn.value = 'Play Again';
    UIguessBtn.className += 'play-again';
}

function setMessage(msg,color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}




    