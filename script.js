

/** Demo ecommerce product page using HTML,CSS, and JavaScript.
 *  Functional Cart page to handle customer order
 *  OOP approach
 *  !!innocode!in!action!!
 **/
 let quantityTag=document.getElementById('display-quantity');   //moved from module
 let currentQuantity = +quantityTag.innerText;                   //moved from module, calls and records the quantity
 const adder = document.getElementById('add');                    //moved from module
 const remover = document.getElementById('remove');                 //moved from module
 adder.addEventListener('click',()=>{quantityControl('add')});     //moved from module
 remover.addEventListener('click', ()=>{quantityControl('minus')});    //moved from module
 
 

const hamburger= document.getElementById('hambars');  //hamburger control
const dropMenu= document.getElementById('drop-menu');
const closeHamburger=document.getElementById('hamclose');
const pictureList = document.getElementsByClassName('product-image');
const numberOfPictures = pictureList.length;   //get the length of pictutes in memory
const movePixLeft = document.getElementById('left');   //image movement control
const movePixRight = document.getElementById('right');
const imageParentDiv = document.getElementById('imageOwnDiv');
const productName = document.getElementById('product-name') 
const productPrice = document.getElementById('price');      //for changing price tag
const colorDescription = document.getElementById('color-name');//HTML Tag for color description/description
const colorBtn1 = document.getElementById('color1');    // color selector button
const colorBtn2 = document.getElementById('color2');  //color selector button
const bagQuantity = document.getElementById('quantity-top');


var sizeInfo = "";
let OnDisplayNow = "";
let movementTracker = 0;        //display the first image in the html list
let noOfItems=0;

movePixLeft.addEventListener('click',()=>{changePicture('L')}); //call on the image scroll controll function using event listeners
movePixRight.addEventListener('click',()=>{changePicture('R')});



if(OnDisplayNow===""){
pictureList[movementTracker].style.display='block';
OnDisplayNow = "green";
}
else if(OnDisplayNow==="green"){loadGreenShirt();pictureList[movementTracker].style.display='block';
}
else{loadBlueShirt();pictureList[movementTracker].style.display='block';
}



GreenShirt={                                                      //greenshirt product object
    banner:"Classic Fit Solid Shirt",
    images:['images/green-shirt.jpg','images/green-unfold.jpg','green-worn.jpg','green-worn2.jpg'],
    price:"95",
    className:"product-image",
    productInfo: "Color: Surplus Green",
    color:"#8a9591"
}
BlueShirt={                                                      //blueshirt product object
    banner:"Classic Fit Solid Shirt",
    price:"120",
    images:['images/blue-shirt.jpg', 'images/blue-unfold.jpg'],
    className: "product-image",
    productInfo: "Color: Blue Blazer" ,
    color:"#485b7c" 
}
let loadGreenShirt=()=>{                                        //greenshirt loader function
   
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

let loadBlueShirt=()=>{                                      //blueshirt loader function
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


const changePicture=(shiftWhere)=>{               //image changer function using the fa fa-angles

    let picturesInObject;

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

const sizehandler=()=>{
    document.querySelectorAll('div.size').forEach(element => {  //control for the selection of sizes
        element.addEventListener('click', (e)=>{
           document.querySelectorAll('div.size').forEach(element=>{ element.style.border='none'});
           e.target.style.border='solid 1px blue'
           sizeInfo= e.target.innerText
        })
    });
}
sizehandler();


function quantityControl(operator){   //quantity control function       
    if (operator==='minus' && currentQuantity>1) {
        console.log('minus clicked')
        currentQuantity--;
       quantityTag.innerHTML=currentQuantity;
    }
    else if(operator === 'add' && currentQuantity<10){
        currentQuantity++;
        quantityTag.innerHTML=currentQuantity; 
    }   
}


function couponCodeGenerator(){   //generate 5 digit code for the coupon discount
    let couponCodeSaverArray = [];
    let hexRef = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','0'];
    for(let i = 0; i < 5; i++){
        let thisIndex = Math.floor((Math.random() * 15) + 1);
        couponCodeSaverArray.push(hexRef[thisIndex]);
    }
    return couponCodeSaverArray.join("");
}

/*Add to bag and order processing here !!!!!!!!!!!!!!*/
function generateOrderNumber(){           //this function generates a random order number
    let orderNumberArray = [];
    let Ref1 = ['A','B','C','D','E','F'];
    let Ref2 = ['0',1,2,3,4,5,6,7,8,9]
    for(let i = 0; i < 3; i++){
        let thisIndex = Math.floor((Math.random() * 2) + 1);
        orderNumberArray.push(Ref1[thisIndex]);
    }
    for(let i = 0; i < 5; i++){
        let thisIndex = Math.floor((Math.random() * 3) + 1);
        orderNumberArray.push(Ref2[thisIndex]);
    }
    return orderNumberArray.join("");
}

// order and object handling!!!


document.getElementById('add-to-bag').addEventListener('click',(e)=>{ orderHandler();})

function orderHandler(){
    
    if (!localStorage.getItem("new_order")){
        const newOrderNumber= generateOrderNumber();
        const coupon= couponCodeGenerator();
        let thisUnitPrice = +productPrice.innerText.match(/\d+/g,'')
        let thisQuantity = +quantityTag.innerHTML;
        console.log(quantityTag.innerHTML)
        let thisSubTotal= +thisUnitPrice * thisQuantity;
        let thisDiscount = thisSubTotal/2;
        //let thisUrl= document.getElementById('p-image').src
        new_order={
            order_number: newOrderNumber,
            discount_coupon: coupon,
            counter:1,
            subTotal: +thisSubTotal ,
            discounted: thisDiscount,
            item1:{product_name: productName.innerText,
                  product_unit_price:productPrice.innerText,
                  product_color: colorDescription.innerText,
                  quantity:quantityTag.innerText,
                  size:sizeInfo,
                  urlOfImage:imageLink(),
                 }
        }
        localStorage.setItem("new_order", JSON.stringify(new_order));
        let retrieveQuantity = new_order.item1.quantity;
        bagQuantity.innerText=retrieveQuantity;

    }
    else {
        let jsonString=localStorage.getItem("new_order");
        let new_order = JSON.parse(jsonString);
        new_order.counter = +new_order.counter + 1;
        console.log(new_order.counter + 'add');
        let serial='item'+ new_order.counter.toString();
        //thisUrl= document.getElementById('p-image').src
        new_order[serial]={product_name: productName.innerText,
                          product_unit_price:productPrice.innerText,
                          product_color: colorDescription.innerText,
                          urlOfImage:imageLink(),
                          size:sizeInfo,
                          quantity:quantityTag.innerText, } 
             new_order.subTotal= cartSubTotal(new_order);
             console.log(new_order);
             new_order.discounted = cartSubTotal(new_order)/2         
            localStorage.clear();
            localStorage.setItem("new_order", JSON.stringify(new_order));        
            newQuantity = +bagQuantity.innerText + (+new_order[serial].quantity);
            bagQuantity.innerText=newQuantity;
           
            console.log(new_order);
    }
    function imageLink(){
        let theUrl;
        if(OnDisplayNow==='green'){
            theUrl=GreenShirt.images[1];
        }
        else{
            theUrl=BlueShirt.images[1];
        }
        return theUrl;
    }
   
       
}

//cart addition here!!!!!
let cartSubTotal=(new_order)=>{
        
        console.log(new_order);
        let subTotal=0;
         let quantitySoFar=new_order.counter;
         console.log(quantitySoFar+'quan')

        let objName = 'item';
        for(let i=1; i <= +quantitySoFar; i++ ){
            let thisObjName= objName + quantitySoFar;
            let price=+new_order[thisObjName].product_unit_price.match(/\d+/g)*(+new_order[thisObjName].quantity);
            console.log(i);
           
            subTotal=subTotal+(price); 
            
        }
        console.log(subTotal)
      
        return subTotal;       
}




// media queries below!!!!!!!!!!!!!


const mediaQuery = '(min-width: 700px)';
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener('change', event => {
    console.log(window.innerWidth);
  if (event.matches) {
    const style = document.getElementById('mainstyle');
    style.setAttribute('href','responsive.css');
  } else {
    const style = document.getElementById('mainstyle');
    style.setAttribute('href','style.css');  
  }
})

