window.onload = ()=>{
    var radioDistrict = document.querySelector('.district img');
    var radioIndependentSchool = document.querySelector('.independent-school img');
    console.log(radioDistrict.src);
    radioDistrict.addEventListener('click', changeTypeDistrict);
    radioIndependentSchool.addEventListener('click', changeTypeIndependentSchool);
    function changeTypeDistrict(){
        if(radioDistrict.src == 'assets/icons/radio-button-on.svg'){
            radioDistrict.src = 'assets/icons/adio-button-off.svg'
            radioIndependentSchool.src = 'assets/icons/radio-button-on.svg'
        }else{
            radioDistrict.src = 'assets/icons/radio-button-off.svg'
            radioIndependentSchool.src = 'assets/icons/radio-button-on.svg'
        }
    }
    function changeTypeIndependentSchool(){
        if(radioIndependentSchool.src == 'assets/icons/radio-button-on.svg'){
            radioDistrict.src = 'assets/icons/adio-button-on.svg'
            radioIndependentSchool.src = 'assets/icons/radio-button-off.svg'
        }else{
            radioDistrict.src = 'assets/icons/radio-button-on.svg'
            radioIndependentSchool.src = 'assets/icons/radio-button-off.svg'
        }
    }

    var rememberMe = document.querySelector(".remember-me img");
    rememberMe.addEventListener("click", function(){
        if(rememberMe.style.opacity == 0.5){
            rememberMe.style.opacity = 1;
        }else{
            rememberMe.style.opacity = 0.5;
        }
    });

    var eyeButton = document.querySelector('.input-text2 img');
    eyeButton.addEventListener('click', inputTypeToggle);

    function inputTypeToggle(){
        var inputType = document.querySelector('.input-text2 input');
        if(inputType.type == 'password'){
            inputType.type = 'text';
        }else{
            inputType.type = 'password';
        }
    }
}
