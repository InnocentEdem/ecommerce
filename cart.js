//code to regenerate cart object below!!!!!!!!!
console.log('yeah')
let createCartObjects=()=>{
    const cartContainer=document.getElementById('cart-container');
    let jsonString=localStorage.getItem("new_order");
    let new_order = JSON.parse(jsonString);
    let itemNum; 
    let id=''; 
    let src='';
    let pname='';
    let color='';
    let price=''; 
    let cost=''; 
    let size='';
    console.log('yeah')

let displayString=`<div id="${id}"class="product_details">
                    <div class="product-img">
                        <img id="del_image" src=${src} class="product-image" alt="Opps image not found!!! Please try again later">
                    </div>
                    <div class="description">
                        <h4>${pname}</h4><br>
                        <!-- <h6>Style</h6>: 2D023 |  -->
                        <h6>Color</h6>: ${color} |
                        <h6>Size</h6>: ${size} <br>
                        <select name="" id="dropdown">
                            <option value="1">1<i class="fa fa-angle-down" aria-hidden="true"></i></option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <h6>Unit Price <br>@ ${price}</h6> &nbsp;&nbsp;&nbsp;
                        <h6>Total Price <br>${cost}</h6>
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
                        </div>
                        
                    
                    </div>
        
                </div>`


                if (new_order.counter>=1){
                    for(let i=1; i<= new_order.counter; i++ ){
                         itemNum = 'item'+ i;
                         id = itemNum;
                         src = new_order[itemNum].urlOfImage;
                         pname = new_order[itemNum].product_name;
                         color = new_order[itemNum].product_color;
                         price = new_order[itemNum].product_unit_price;
                         size = new_order[itemNum].size
                         cost = (+new_order[itemNum].quantity) * (+new_order[itemNum].product_unit_price.match(/\d+/g,''));
            
                        cartContainer.innerHTML=displayString;
            
                    }
                }
                

}
createCartObjects();