/** Demo ecommerce product page using HTML,CSS, and JavaScript.
 *  Functional Cart page to handle customer order
 *  OOP approach
 *  !!innocode!in!action!!
 **/
const hamburger= document.getElementById('hambars');  //hamburger control
const dropMenu= document.getElementById('drop-menu');
const closeHamburger=document.getElementById('hamclose');
const pictureList = document.getElementsByClassName('product-image');
const numberOfPictures = pictureList.length;
const movePixLeft = document.getElementById('left');
const movePixRight = document.getElementById('right');
const imageParentDiv = document.getElementById('imageOwnDiv');
const productName = document.getElementById('product-name') 
const productPrice = document.getElementById('price');      //for changing price tag
const colorDescription = document.getElementById('color-name');//HTML Tag for color description/description
const colorBtn1 = document.getElementById('color1');    // color selector button
const colorBtn2 = document.getElementById('color2');  //color selector button
let OnDisplayNow = "";
let movementTracker = 0;        //display the first image in the html list

if(OnDisplayNow===""){
pictureList[movementTracker].style.display='block';
}
else if(OnDisplayNow==="green"){loadGreenShirt();pictureList[movementTracker].style.display='block';}
else{loadBlueShirt();pictureList[movementTracker].style.display='block';}



GreenShirt={                                                      //greenshirt product object
    banner:"Classic Fit Solid Shirt",
    images:['images/green-shirt.jpg','images/green-unfold.jpg','green-worn.jpg','green-worn2.jpg'],
    price:"95",
    className:"product-image",
    productInfo: "Color: Surplus Green",
    color:"#8a9591"
}
BlueShirt={                                                        //blueshirt product object
    banner:"Classic Fit Solid Shirt",
    price:"120",
    images:['images/blue-shirt.jpg', 'images/blue-unfold.jpg'],
    className: "product-image",
    productInfo: "Color: Blue Blazer" ,
    color:"#485b7c" 
}
let loadGreenShirt=()=>{                                          //greenshirt loader function
   
    deleteCurrentImages("product-image");
    for(let i=GreenShirt.images.length; i>=0;i--){
    let newImage=document.createElement("img");
    newImage.src=GreenShirt.images[i];
    newImage.className=GreenShirt.className;
    imageParentDiv.insertBefore(newImage,pictureList[0])
    }
    pictureList[movementTracker].style.display='block';
    productName.innerHTML = GreenShirt.banner;
    productPrice.innerHTML = GreenShirt.price;
    colorDescription.innerHTML = GreenShirt.productInfo;
    OnDisplayNow = "green";
}

let loadBlueShirt=()=>{                                      //greenshirt loader function
    console.log('blue');
    deleteCurrentImages("product-image");
    for(let i=BlueShirt.images.length-1; i>=0;i--){
    let newImage=document.createElement("img");
    newImage.src=BlueShirt.images[i];
    newImage.className=GreenShirt.className;
    console.log(newImage);
    imageParentDiv.insertBefore(newImage,pictureList[0])
    }
    pictureList[movementTracker].style.display='block';
    productName.innerHTML = BlueShirt.banner;
    productPrice.innerHTML = BlueShirt.price;
    colorDescription.innerHTML = BlueShirt.productInfo;
    OnDisplayNow = "blue";
}

colorBtn1.addEventListener("click",(e)=>{  loadGreenShirt();}); // trigger on the color choice events
colorBtn2.addEventListener("click",(e)=>{ loadBlueShirt();});

let deleteCurrentImages=(imageClassName)=>{
    const elements = document.getElementsByClassName(imageClassName);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        console.log('deleted');
    }
}

const hamburgerOpen=()=>{           //hamburger menu open
    
    dropMenu.style.display='block';
    hamburger.style.display = 'none';
    closeHamburger.style.display='block'
}
const hamburgerClose=()=>{          //hamburger menu close
    dropMenu.style.display='none';
    hamburger.style.display = 'block';
    closeHamburger.style.display='none';
}
hamburger.addEventListener('click', (e)=>{hamburgerOpen()});        //trigger on hamburger
closeHamburger.addEventListener('click', (e)=>{hamburgerClose()});


const changePicture=(shiftWhere)=>{                //image changer function using the fa fa-angles
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
    Array.from(pictureList).forEach((picture) => {    //object must be serialized first! painful discovery!
        console.log(picture);
        console.log(movementTracker);
        picture.style.display = "none";
    });
    Array.from(pictureList)[movementTracker].style.display='block';
}
movePixLeft.addEventListener('click',()=>{changePicture('L')}); //call on the image scroll controll function using event listeners
movePixRight.addEventListener('click',()=>{changePicture('R')});