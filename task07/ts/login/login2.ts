window.onload = ()=>{

    const radio_button_on = "assets/icons/radio-button-on.svg";

    const radio_button_off = "assets/icons/radio-button-off.svg";

    let radioDistrict: HTMLImageElement = document.querySelector('.district img');

    let radioIndependentSchool: HTMLImageElement = document.querySelector('.independent-school img');

    const previewIcon = document.querySelector('.input-text2 img');

    var inputType:HTMLInputElement = document.querySelector('.input-text2 input');

    const username:HTMLInputElement = document.querySelector('.input-text input');

    const passwordInput:HTMLInputElement = document.querySelector('.input-text2 input');


    radioDistrict.addEventListener('click', ()=>{        
        radioDistrict.setAttribute('src', radio_button_on);
        radioDistrict.setAttribute('aria-checkd', "true");

        radioIndependentSchool.setAttribute('src', radio_button_off);
        radioIndependentSchool.setAttribute('aria-checked', 'false');
    });

    radioIndependentSchool.addEventListener('click', ()=>{
        radioIndependentSchool.setAttribute('src', radio_button_on);
        radioIndependentSchool.setAttribute('aria-checked', 'true');

        radioDistrict.setAttribute('src', radio_button_off);
        radioDistrict.setAttribute('aria-checkd', 'false');
    });
    
    previewIcon.addEventListener('click', ()=>{
        if(inputType.type == 'password'){
            inputType.type = 'text';
        }else{
            inputType.type = 'password';
        }
    });   

    username.addEventListener('focusout', ():boolean=>{
        if(username.value.length >0){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username.value)){
                return true;
            }else{
                alert('You have entered a wrong email address/username.');
                return false;
            }
        }
    });

    passwordInput.addEventListener('focusout', ()=>{
        if(passwordInput.value)
        if(passwordInput.value.length > 0 && passwordInput.value.length>8 && /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(passwordInput.value)){
            return true;
        }
        else{
            alert(`Password Rules: 
            1. Assert a string has at least one number.
            2. Assert a string has at least one special character.`);
            return false;
        }
    });

    // const rememberMe:HTMLDivElement = document.querySelector(".remember-me");

    // const checkedRememberMe:HTMLImageElement = document.querySelector('.remember-me img');

    // const newCheckedRememberMe = document.createElement('img')
    // const checkboxInput:HTMLInputElement = document.createElement('input');

    // rememberMe.addEventListener("click", ()=>{
    //     if(rememberMe.contains(checkedRememberMe)){
    //         const checkboxInput:HTMLInputElement = document.createElement('input');

    //         checkboxInput.setAttribute('type', 'checkbox');
    //         rememberMe.appendChild(checkboxInput);
    //         rememberMe.removeChild(checkedRememberMe);
    //     }
    // });

    // checkboxInput.addEventListener('click', ()=>{
    //     rememberMe.removeChild(checkboxInput);
    //     rememberMe.appendChild(newCheckedRememberMe);
    //     newCheckedRememberMe.setAttribute('src', 'assets/icons/checkbox-checked.svg');
    // });
    
}

