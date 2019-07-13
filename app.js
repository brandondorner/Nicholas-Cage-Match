let cardFlipAmount = 0
let cardToCheck = ''
let card2 = ''

const CardClick = (card) =>{
    element = document.getElementById(event.target.id).parentElement;
    cardFlipAmount++;
    
    element.classList.add('visible');

    if (cardFlipAmount === 1){
      cardToCheck = document.getElementById(event.target.id).nextElementSibling.id
    
    }else if (cardToCheck === document.getElementById(event.target.id).nextElementSibling.id){
      //match true
      cardFlipAmount = 0
    } else {
      //reset cards
      cardToCheck = ''
      cardFlipAmount = 0
    }


    console.log(cardToCheck)


}