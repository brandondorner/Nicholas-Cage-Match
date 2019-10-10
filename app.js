let cardFlipAmount = 0
let cardToCheck = ''
let card2 = ''
let matchTracker=0

function GameStart(){
  startSound.play()
  crowd.play()
  shuffle()
  document.getElementById('overlay').classList.remove('visible');
  
  let element = document.getElementById('progress-bar')
  element.classList.add('visible')

  let percentDone = 0.1
  let interval = setInterval(frame, 40);
  function frame(){
    if (percentDone >= 100){
      clearInterval(interval)
      crowd.pause()
      document.getElementById('failure-overlay').classList.add('visible')
    } else if (matchTracker === 9){
      crowd.pause()
      champ.play()
      clearInterval(interval)
    } else {
      percentDone+= 0.1;
      element.style.width = percentDone + '%'
    }
  }
}

function NewGame(){
  //remove visibility of overlays
  document.getElementById('victory-overlay').classList.remove('visible');
  document.getElementById('failure-overlay').classList.remove('visible');
  //reset cards
  matchTracker = 0;
  cards = document.getElementsByClassName('card')
  for (card of cards){
    card.classList.remove('visible')
  };
  //reset timer
  GameStart()
  //shuffle imgs
  shuffle() 
}

function CardClick (){
  cardFlipAmount++;
  if (cardFlipAmount > 2){
    return
  }
  element = document.getElementById(event.target.id).parentElement;
  element.classList.add('visible');
  imgSrc = document.getElementById(event.target.id).nextElementSibling.src


    if (cardFlipAmount === 1){
      card1 = imgSrc
      card2 = element
    
    }else if (card1 === imgSrc){
      //match true
      newSound();
      cardFlipAmount = 0
      matchTracker ++
      if (matchTracker === 9){
        setTimeout(function(){
          document.getElementById('victory-overlay').classList.add('visible')
        }), 500}
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
      }, 1000)

    }

}

let imgArray = [
  "https://i.pinimg.com/originals/50/cb/08/50cb085f28faa563a5e286ecadd3d1bf.jpg",
  "https://i.pinimg.com/originals/50/cb/08/50cb085f28faa563a5e286ecadd3d1bf.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-930grOSEnetsdzjv8xWmrC4Nt9GHBJUxwk0Os0XrHIRNgVxXVg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-930grOSEnetsdzjv8xWmrC4Nt9GHBJUxwk0Os0XrHIRNgVxXVg",
  "https://ih1.redbubble.net/image.140539306.1200/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1u3.jpg",
  "https://ih1.redbubble.net/image.140539306.1200/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1u3.jpg",
  "https://i.pinimg.com/originals/8a/38/89/8a3889396ef441152068c2f3a8e2fb2c.jpg",
  "https://i.pinimg.com/originals/8a/38/89/8a3889396ef441152068c2f3a8e2fb2c.jpg",
  "https://peopledotcom.files.wordpress.com/2017/08/beverly-hills-hs-nicolas-cage.jpg",
  "https://peopledotcom.files.wordpress.com/2017/08/beverly-hills-hs-nicolas-cage.jpg",
  "https://idposter.com/img/bigs/178/id102280.jpg",
  "https://idposter.com/img/bigs/178/id102280.jpg",
  "https://i.pinimg.com/originals/48/81/7e/48817e9bbb39bb3416cdc8bbdf015c16.jpg",
  "https://i.pinimg.com/originals/48/81/7e/48817e9bbb39bb3416cdc8bbdf015c16.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOKgHbhP2JRXaKRp8dstvq8yV3it1D_EZ0YQK4TGeQATarazmNA",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOKgHbhP2JRXaKRp8dstvq8yV3it1D_EZ0YQK4TGeQATarazmNA",
  "https://www.biography.com/.image/t_share/MTIwNjA4NjMzNzYwMjg2MjIw/nicolas-cage-9234498-1-402.jpg",
  "https://www.biography.com/.image/t_share/MTIwNjA4NjMzNzYwMjg2MjIw/nicolas-cage-9234498-1-402.jpg", 
]

function shuffle() { //fisher-yates
  for (let i = imgArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]]; // swap elements

    document.getElementById(i + 1).nextElementSibling.src = imgArray[i]
    // console.log(j+1)
    document.getElementById(j+1).nextElementSibling.src = imgArray[j]
    }
}

let startSound = new Audio('./cage-match-mp3/cage-match.mp3')
let champ = new Audio('./cage-match-mp3/champ.mp3')
let crowd = new Audio('./cage-match-mp3/crowd.mp3')
crowd.volume = 0.3;

function newSound(){
  sound = new Audio(sounds[Math.floor(Math.random() * (sounds.length) )])
  sound.play()
}

let sounds = [
  './cage-match-mp3/broken.mp3',
  './cage-match-mp3/bunny.mp3',
  './cage-match-mp3/chair.mp3',
  './cage-match-mp3/congratulation.mp3',
  './cage-match-mp3/declaration.mp3',
  './cage-match-mp3/legs.mp3',
  './cage-match-mp3/rock.mp3',
  './cage-match-mp3/newguy.mp3',
  './cage-match-mp3/women.mp3',
  './cage-match-mp3/ohh.mp3',
  './cage-match-mp3/admiring.mp3',
  './cage-match-mp3/cage.mp3',
  './cage-match-mp3/entrails.mp3',
  './cage-match-mp3/horn.mp3',
  './cage-match-mp3/burned.mp3',
  './cage-match-mp3/ohmygod.mp3',
]