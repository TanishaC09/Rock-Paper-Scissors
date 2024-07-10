let score=JSON.parse(localStorage.getItem('score')) ||{
    Wins :0,
    Losses :0,
    Ties: 0
}
// to get score out of our localStorage
//console.log(localStorage.getItem('score')); // this is just a string which we need to reconvert to js score object to keep a record 

// to get our p element in js

updateScore();
// update score on page






function playerGame1(playerMove){
    const computerMove=pickComputerMove_game1();
            let result = '';
            if(playerMove===computerMove){
                result='Tie';
            }
            else if(playerMove==='Scissors'){
                  if (computerMove === 'Paper') {
                    result = 'You Win';
                } else {
                    result = 'You Lose';
                }
            }
            else if(playerMove==='Rock'){
                  if (computerMove === 'Paper') {
                    result = 'You Lose';
                } else {
                    result = 'You Win';
                }
            }
            else if(playerMove==='Paper'){
                    if (computerMove === 'Scissors') {
                        result = 'You Lose';
                    } else {
                        result = 'You Win';
                    }
                }

                // now we will calculate and update our score
                if(result==='You Win'){
                    score.Wins+=1;
                }
                else if(result==='You Lose'){
                    score.Losses+=1;
                }
                else{
                    score.Ties+=1;
                }
                // to set or save our score in localStorage
                localStorage.setItem('score',JSON.stringify(score)); //remember localStorage can only contain string
          
                updateScore();

                document.querySelector('.js-result').innerHTML=result;


                document.querySelector('.js-moves').innerHTML='Your Move :  ' +playerMove+ '<br> Computer Move :  '+computerMove;
         
            
            
}

function pickComputerMove_game1() {
    let computerMove = '';
    const randomMove = Math.random();
    if (randomMove >= 0 && randomMove < 1/3) {
        computerMove = 'Rock';
    } else if (randomMove >= 1/3 && randomMove < 2/3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }
    return computerMove;
}
function updateScore(){
    document.querySelector('.js-score')
    .innerHTML=`Wins : ${score.Wins} ,Losses : ${score.Losses}, Ties : ${score.Ties}` ;

}
