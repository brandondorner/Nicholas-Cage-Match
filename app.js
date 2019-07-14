let cardFlipAmount = 0
let cardToCheck = ''
let card2 = ''

function CardClick (){
  cardFlipAmount++;
  if (cardFlipAmount > 2){
    return
  }
  element = document.getElementById(event.target.id).parentElement;
  element.classList.add('visible');
  imgId = document.getElementById(event.target.id).nextElementSibling.id


    if (cardFlipAmount === 1){
      card1 = imgId
      card2 = element
      console.log('1')
      console.log(card1)
    
    }else if (card1 === imgId){
      //match true
      cardFlipAmount = 0
      console.log('2')
      console.log(card1)
    } else {
      //reset cards
      setTimeout( function(){
        cardFlipAmount = 0
        element.classList.add('clicked')
        card2.classList.add('clicked')
        element.classList.remove('visible')
        card2.classList.remove('visible')
        card1 = ''
        card2 = ''
        console.log('3')
        console.log(imgId)
      }, 1000)

    }

}