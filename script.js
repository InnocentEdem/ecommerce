
const hamburger= document.getElementById('hambars');
const dropMenu= document.getElementById('drop-menu');
const closeHamburger=document.getElementById('hamclose');
const pictureList = document.getElementsByClassName('product-image');
const numberOfPictures = pictureList.length;
const movePixLeft = document.getElementById('left');
const movePixRight = document.getElementById('right');
const imageParentDiv = document.getElementById('product-picture');
const imageDivContents = document.getElementsByClassName('product-image');
let movementTracker = 0;

pictureList[movementTracker].style.display='block';
baseFolder='./images/'
greenSrcArray=['green-shirt.jpg','green-unfold'];
purpleSrcArray=['purple-shirt.jpg','purple-unfold'];

GreenShirt={
    images:['images/green-shirt.jpg','images/green-unfold'],
    price:"95",
    className:"product-image"
}
BlueShirt={
    price:"120",
    images:['images/green-shirt.jpg', 'images/green-unfold'],
    className: "product-image"
   
}
let loadGreenShirt=()=>{
    deleteCurrentImages(GreenShirt.className);
    for(let i=GreenShirt.images.length; i>=0;i--){
    let newImage=document.createElement("img");
    newImage.src=GreenShirt.images[i];
    newImage.class=GreenShirt.className;
    imageParentDiv.insertBefore(newImg,)
    }

}
function deleteCurrentImages(imageClassName){
    const elements = document.getElementsByClassName("imageClassName");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}




const hamburgerOpen=()=>{
    
    dropMenu.style.display='block';
    hamburger.style.display = 'none';
    closeHamburger.style.display='block'
}
const hamburgerClose=()=>{ 
    dropMenu.style.display='none';
    hamburger.style.display = 'block';
    closeHamburger.style.display='none';
}
hamburger.addEventListener('click', (e)=>{hamburgerOpen()});
closeHamburger.addEventListener('click', (e)=>{hamburgerClose()});


const changePicture=(shiftWhere)=>{
    if(shiftWhere==='L'){
       movementTracker--;
       if(movementTracker<0){movementTracker=numberOfPictures-1;}
       else if (movementTracker>=numberOfPictures){ movementTracker=0;}
    }
    else if(shiftWhere==='R'){
        movementTracker++;
        if(movementTracker<0){movementTracker=numberOfPictures-1;}
        else if (movementTracker>=numberOfPictures){ movementTracker=0;}
     }
    Array.from(pictureList).forEach((picture) => {
        console.log(picture);
        console.log(movementTracker);
        picture.style.display = "none";
    });
    Array.from(pictureList)[movementTracker].style.display='block';
}
movePixLeft.addEventListener('click',()=>{changePicture('L')});
movePixRight.addEventListener('click',()=>{changePicture('R')});