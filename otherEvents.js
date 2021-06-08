/* Other Kominini Js stuff to be handled here.
   5-digit hex-code generator,
   order handler object,
   de3 eb3 kika ho biaaa...sorry, this code was written in Gh.

*/
const couponCodeGenerator = ()=>{
    let couponCodeSaverArray = [];
    let hexRef = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','0'];
    for(let i = 0; i < 5; i++){
        let thisIndex = Math.floor((Math.random() * 15) + 1);
        couponCodeSaverArray.push(hexRef[thisIndex]);
    }
    return couponCodeSaverArray.join("");
}