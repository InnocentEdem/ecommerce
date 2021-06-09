
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






