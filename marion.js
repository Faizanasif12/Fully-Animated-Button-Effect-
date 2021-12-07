
//HOME images gallery 


function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}











//portfolioimages

//logoimg

var logo=()=>{
  window.location.href = "logoimg.html";   
  imgo()
}


var businesscard=()=>{
  window.location.href = "bcardimg.html";   
  imgo()
}





//here all contact page code

let usernameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let showPasswordButton = document.querySelector('.password-button')
let face = document.querySelector('.face')

passwordInput.addEventListener('focus', event => {
  document.querySelectorAll('.hand').forEach(hand => {
    hand.classList.add('hide')
  })
  document.querySelector('.tongue').classList.remove('breath')
})

passwordInput.addEventListener('blur', event => {
  document.querySelectorAll('.hand').forEach(hand => {
    hand.classList.remove('hide')
    hand.classList.remove('peek')
  })
  document.querySelector('.tongue').classList.add('breath')
})

usernameInput.addEventListener('focus', event => {
  let length = Math.min(usernameInput.value.length - 16, 19)
  document.querySelectorAll('.hand').forEach(hand => {
    hand.classList.remove('hide')
    hand.classList.remove('peek')
  })
  
  face.style.setProperty('--rotate-head', `${-length}deg`)
})

usernameInput.addEventListener('blur', event => {
  face.style.setProperty('--rotate-head', '0deg')
})
  
usernameInput.addEventListener('input', _.throttle(event => {
  let length = Math.min(event.target.value.length - 16, 19)
  
  face.style.setProperty('--rotate-head', `${-length}deg`)
}, 100))

showPasswordButton.addEventListener('click', event => {
  if (passwordInput.type === 'text') {
    passwordInput.type = 'password'
    document.querySelectorAll('.hand').forEach(hand => {
      hand.classList.remove('peek')
      hand.classList.add('hide')
    })
  } else {
    passwordInput.type = 'text'
    document.querySelectorAll('.hand').forEach(hand => {
      hand.classList.remove('hide')
      hand.classList.add('peek')
    })
  }
})