
//coupon handler here


function applyCoupon(){
   
        let jsonString=localStorage.getItem("new_order");
        let new_order = JSON.parse(jsonString);
        let apply = document.getElementById('apply_coupon');
            if(new_order && new_order.counter>=1 ){
            document.getElementById('sEstimate').innerText = new_order.discounted;
            
            }
            else  document.getElementById('sEstimate').innerText = "Invalid";
       
    
}

let cartSubTotal=(new_order)=>{
        
    let subTotal=0;
     let quantitySoFar=new_order.counter;
     console.log(quantitySoFar+'quan')

    let objName = 'item';
    for(let i=1; i <= +quantitySoFar; i++ ){
        let thisObjName= objName + quantitySoFar;
        let price=+new_order[thisObjName].product_unit_price.match(/\d+/g);
        console.log(i);
       
        subTotal=subTotal+(price); 
        
    }
    new_order.subTotal= cartSubTotal(new_order);
    console.log(new_order);
    new_order.discounted = cartSubTotal(new_order)/2       
    console.log(subTotal)
  
    return subTotal;       
}

//remove handler !!!!!!

function remove(itemName){
    idToRemove=itemName.getAttribute('id');
    toRemove = document.getElementById(idToRemove);
    let jsonString=localStorage.getItem("new_order");
    let new_order = JSON.parse(jsonString);
    delete new_order[idToRemove];
    console.log(new_order.counter);
   
    let baseName= +idToRemove.match(/\d+/g,'');
    newIndex = +baseName+1;
    while(new_order['item'+newIndex]){
        objname='item'+(newIndex-1);
        oldIndex='item'+(newIndex);
        new_order[objname]=new_order[oldIndex];
        delete new_order[oldIndex];
        newIndex++

        
        console.log(new_order[newIndex])
    }
    new_order.counter= +new_order.counter-1;
    cartSubTotal(new_order);
    localStorage.clear();
    localStorage.setItem("new_order", JSON.stringify(new_order));
    toRemove.remove();
    createCartObjects();
   
    
}


//sub total
    






//code to regenerate cart object below!!!!!!!!!

let createCartObjects=()=>{
   
        const cartContainer=document.getElementById('cart-container');
        let jsonString=localStorage.getItem("new_order");
        let new_order = JSON.parse(jsonString);
        cartSubTotal(new_order);
        let id=''; 
        let image='';
        let pname='';
        let color='';
        let price=''; 
        let cost=''; 
        let size='';
        
        cartContainer.innerHTML="";
        let displaysTotal= document.getElementById('s_Total');
        let displayEst = document.getElementById('sEstimate');
        let displayCoupon = document.getElementById('coupon_code');
        

                    if (new_order && new_order.counter>=1){
                        for(let i=1; i<= new_order.counter; i++ ){
                            
                            itemNum = 'item'+ i;
                            id = itemNum;
                            
                            image = new_order[itemNum].urlOfImage;
                            
                            pname = new_order[itemNum].product_name;
                            color = new_order[itemNum].product_color;
                            price = new_order[itemNum].product_unit_price;
                            size = new_order[itemNum].size                  
                            cost = (+new_order[itemNum].quantity) * (+new_order[itemNum].product_unit_price.match(/\d+/g));

                            newTag = document.createElement('div');
                            
                            let c = i.toString();
                            newTag.innerHTML=htmlFormat(c); 
                                    
                            cartContainer.appendChild(newTag)

                            document.getElementById('del_image'+c).src=image;
                            document.getElementById('describe'+c).innerText=pname;
                            document.getElementById('color'+c).innerText=color;
                            document.getElementById('size'+c).innerText=size;
                            document.getElementById('unit_price'+c).innerText=price;
                            document.getElementById('total_price'+c).innerText= '$'+cost;
                
                        }
                        displaysTotal.innerText=new_order.subTotal;
                        displayEst.innerText=new_order.subTotal;
                        displayCoupon.placeholder=new_order.discount_coupon;


                    }
                  
}               
createCartObjects();    
              


function htmlFormat(c){

    let text =`<div class="product_details the_items">
<div class="product-img">
    <img id="del_image${c}" src="" class="product-image" alt="Opps image not found!!! Please try again later">
</div>
<div class="description">
    <h4 id="describe${c}" ></h4><br>
    <!-- <h6>Style</h6>: 2D023 |  -->
    <h6 id="color${c}"></h6>
    <h6 id="size${c}">Size</h6> <br>
    <select name="" id="dropdown">
        <option value="1">1<i class="fa fa-angle-down" aria-hidden="true"></i></option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    <h6><div>Unit price</div><br><div id="unit_price${c}">120</div></h6> &nbsp;&nbsp;&nbsp;
    <h6><div>Total Price</div> <br><div id="total_price${c}">$120</div></h6>
    <div class="right">
        <div class="chckbx">
            <input type="checkbox"> Free gift package?
        </div>
        <hr>
        <div class="radiobtn">
            <input type="radio" checked> <b>Ship to Me</b> 
        </div>
        <div class="radiobtn">
            <input type="radio"> In-Store Pickup
        </div>
        <div class="radiobtn">
            <input type="radio"> Curbside Pickup
        </div>
        <div class="remedit">
        <div> <a id="item${c}" onclick="remove(item${c})" href="">Remove</a></div></div>
    </div>

</div>

</div>
`;
return text;
}


