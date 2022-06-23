const myUrl = document.getElementById('myUrl');
const myColor = document.getElementById('myColor');
const myBorder = document.getElementById('myBorder');
const myBox = document.getElementsByClassName('box')[0];
const myImg = document.getElementsByClassName('img')[0];

myUrl.addEventListener('change', ()=>{
    myImg.style.backgroundImage = "url(" + myUrl.value + ")";
});

myColor.addEventListener('change', ()=>{
    myBox.style.borderColor = myColor.value;
});

myBorder.addEventListener('change', ()=>{
    myBox.style.borderWidth = `${parseInt(myBorder.value)}px`;
});