const myButton = document.getElementById('myButton');
const mypara = document.getElementsByTagName('p')[0]
myButton.addEventListener('click', ()=>{
    if(myButton.innerHTML.includes('👀')){
        myButton.innerHTML = 'HIDE TEXT 🙈';
        mypara.innerHTML = 'This is some text!';
    }else{
        myButton.innerHTML = 'SHOW TEXT 👀';
        mypara.innerHTML = '';
    }
});

