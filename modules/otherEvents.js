
/* Other Kominini Js stuff to be handled here.
   5-digit hex-code generator,
   order handler object,
   innocode 2021

*/
let quantityTag=document.getElementById('display-quantity');
let currentQuantity = +quantityTag.innerText;
const adder = document.getElementById('plus');
const remover = document.getElementById('minus');
adder.addEventListener('click',(e)=>{quantityControl('add')});
remover.addEventListener('click', (e)=>{quantityControl('minus')});



class CreateOrder{
    constructor(orderNumber, product){
        this.orderNumber=orderNumber;
        this.product=product;
    }
    
}

 function couponCodeGenerator(){
    let couponCodeSaverArray = [];
    let hexRef = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','0'];
    for(let i = 0; i < 5; i++){
        let thisIndex = Math.floor((Math.random() * 15) + 1);
        couponCodeSaverArray.push(hexRef[thisIndex]);
    }
    return couponCodeSaverArray.join("");
}

 function quantityControl(operator){ //already copied to main script

    if ((operator==='minus' )&& (currentQuantity > 1) ){
       let newquantity = currentQuantity - 1;
       quantityTag.innerText=newquantity;

    }
    else if((operator === 'add') && (currentQuantity <= 10)){
        let newquantity = currentQuantity + 1;
        quantityTag.innerText=newquantity;  
    }
    else return;

}
// media queries below!!!!!!!!!!!!!
const web = document.getElementById('image-res');
const mobile = document.getElementById('mobile-image');
const imageCode=        `<div id="product-picture" class="product-picture">
                            <div id="imageOwnDiv" class="imageOwnDiv">
                                <img class="product-image" src="images/green-shirt.jpg" alt="">
                                <img class="product-image" src="images/green-unfold.jpg" alt="">
                            </div>   
                            <div class="shift">
                                <i id="left" class="fa fa-angle-left"></i>
                                <i id="right" class="fa fa-angle-right"></i>
                            </div>
                        </div> `



function myFunction(x) {
  if (x.matches) { // If
    console.log('fired ')
    let savedLink=mobile.innerHTML;
    const style = document.getElementById('mainstyle');
    style.setAttribute('href','responsive.css')
    web.innerHTML = imageCode;
    mobile.removeChild(mobile.lastChild)
    
  } else {console.log('not')
    const style = document.getElementById('mainstyle');
    style.setAttribute('href','style.css')
    mobile.innerHTML = imageCode;
    web.removeChild(web.lastChild)
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 





function myFunction(e) {       //media Query function
    if (e.matches) { // If
      console.log('fired ')
      const style = document.getElementById('mainstyle');
      style.setAttribute('href','responsive.css');
      
    } else {console.log('not')
      const style = document.getElementById('mainstyle');
      style.setAttribute('href','style.css')
      mobile.innerHTML = imageCode;
      web.removeChild(web.lastChild)
    }
  }
  const mediaQuery = '(min-width: 700px)';
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener('change', event => {
    console.log(window.innerWidth);
  if (event.matches) {
    const style = document.getElementById('mainstyle');
    style.setAttribute('href','responsive.css');
    webview.appendChild(mobileview.removeChild(mobileview.firstChild))
  } else {
    const style = document.getElementById('mainstyle');
    style.setAttribute('href','style.css')
    webview.appendChild(webview.removeChild(webview.firstChild))
   
  }
})

mediaQueryList.addEventListener('change', event => {
    console.log(window.innerWidth);
  if (event.matches) {
    const style = document.getElementById('mainstyle');
    style.setAttribute('href','responsive.css');
    webview.appendChild(mobileview.removeChild(mobileview.firstChild));
  } else {
    const style = document.getElementById('mainstyle');
    style.setAttribute('href','style.css');
     mobileview.appendChild(webview.removeChild(webview.firstChild));
   
  }
})
