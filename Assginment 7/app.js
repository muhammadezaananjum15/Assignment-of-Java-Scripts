// ==================================================
function applyDiscount(price,discount){
  return price - discount
}
console.log(applyDiscount(1000, 200)); 
console.log(applyDiscount(500, 50));   
// ==================================================
function checkResult(marks){
  if(marks >=50 ){
    return "Pass"
  }
  else{
    return "Fail"
  }
}
console.log(checkResult(70)); 
console.log(checkResult(40)); 
// ==================================================
function placeOrder(callback){
  console.log("Order Placed");
 callback() 
}
function orderReady(){
  console.log("Order is Ready");
  
}
placeOrder(orderReady)
// =====================================================
function sendOtp ( cb, otp){
  console.log("Seding OPT !!!");
  cb(otp)
}
function optReciver(code){
  console.log("Send the OPT",code);
}
sendOtp(optReciver,892)
// ============================================================
function addmoney(balance){
  balance = 900 + balance;
  return balance
}
let orginalBalance = 1000;
console.log("Orginal Balance",orginalBalance);
let newBalance = addmoney(orginalBalance);
console.log("New Balance",newBalance);
// ===================================================================
function addItem(cart){
  cart.push("Iphone");
}
let cart = ["Samsung","Xiomi","Redmi","Realme","Nokia"]
console.log("Before",cart);
addItem(cart)
console.log("After",cart);
// ============================================
function updateName(user){
  user.name = "Moshin Naqvi"
}
let user = { name : "Ali"};
updateName(user)
console.log(user);
// ==============================================================================
// BONNUSSS QUESTIONNNNNNNNN
function calculate(cb,a,b){
  cb(a,b)
}
function subNumber(a,b){
  console.log("Result",a-b);
}
calculate(subNumber,470,50)
// ======================================================================================