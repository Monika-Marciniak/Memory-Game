const card = document.createElement('div');
    card.className = 'card';
    
    const image = document.createElement("img");
   
    image.src = "doggo.jpg"
    image.alt = "Card Image Front"

   card.appendChild(image);
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.appendChild(card);
    

    function flipCard() {
    var card = document.querySelector('.card');
    card.classList.toggle("flipped");
    const imageSrc=document.querySelector("img").src
    console.log(imageSrc)
    if(imageSrc.includes('doggo.jpg')){
      image.src = "./puppy.jpg"
      image.alt = "Card Image Front"
    }
    else{
      image.src = "./doggo.jpg"
      image.alt = "Card Image Front"
    }
    }

  card.addEventListener("click",flipCard);