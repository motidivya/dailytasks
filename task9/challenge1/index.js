// javascript
const myList = document.querySelector('.navbar ul');

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', ()=>{
    var userInput = document.getElementById('userInput');
    if(userInput.value.length >0){
        newItem = document.createElement('li');
        newItem.setAttribute('class', 'item');
        newItem.innerHTML = userInput.value;
        myList.appendChild(newItem);
        userInput.value= "";
    }else{
        alert('Provide valid input');
    }
});
