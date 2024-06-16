const card = document.createElement('div');
    card.className = 'card';
    
    const image = document.createElement("img");
   
    image.src = "joker.jpg"
    image.alt = "Card Image Front"

   card.appendChild(image);
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.appendChild(card);
    

    function flipCard() {
    var card = document.querySelector('.card');
    card.classList.toggle("flipped");
    const imageSrc=document.querySelector("img").src
    console.log(imageSrc)
    if(imageSrc.includes('joker.jpg')){
      image.src = "pictures/back.jpg"
      image.alt = "Card Image Front"
    }
    else{
      image.src = "pictures/joker.jpg"
      image.alt = "Card Image Back"
    }
    }

  card.addEventListener("click",flipCard);