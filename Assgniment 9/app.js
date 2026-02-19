function changeText(){
    let text = document.getElementById("text");
    text.innerText = "Hello to DOM";
}
function updateText(){
   document.getElementById("para").innerHTML = "Updated"; 
}
function showName() {
  const name = document.getElementById('name').value;
  document.getElementById('result').innerText = name;
}
setTimeout(function () {
  document.getElementById('msg').innerText = 'Welcome to JavaScript';
}, 6000);
function changeMessage() {
  document.getElementById('message').innerText = 'Button Clicked';
}
