window.onload = function () {
    var radio_button_on = "assets/icons/radio-button-on.svg";
    var radio_button_off = "assets/icons/radio-button-off.svg";
    var radioDistrict = document.querySelector('.district img');
    var radioIndependentSchool = document.querySelector('.independent-school img');
    var previewIcon = document.querySelector('.input-text2 img');
    var inputType = document.querySelector('.input-text2 input');
    var username = document.querySelector('.input-text input');
    var passwordInput = document.querySelector('.input-text2 input');
    radioDistrict.addEventListener('click', function () {
        radioDistrict.setAttribute('src', radio_button_on);
        radioDistrict.setAttribute('aria-checkd', "true");
        radioIndependentSchool.setAttribute('src', radio_button_off);
        radioIndependentSchool.setAttribute('aria-checked', 'false');
    });
    radioIndependentSchool.addEventListener('click', function () {
        radioIndependentSchool.setAttribute('src', radio_button_on);
        radioIndependentSchool.setAttribute('aria-checked', 'true');
        radioDistrict.setAttribute('src', radio_button_off);
        radioDistrict.setAttribute('aria-checkd', 'false');
    });
    previewIcon.addEventListener('click', function () {
        if (inputType.type == 'password') {
            inputType.type = 'text';
        }
        else {
            inputType.type = 'password';
        }
    });
    username.addEventListener('focusout', function () {
        if (username.value.length > 0) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username.value)) {
                return true;
            }
            else {
                alert('You have entered a wrong email address/username.');
                return false;
            }
        }
    });
    passwordInput.addEventListener('focusout', function () {
        if (passwordInput.value.length > 0 && passwordInput.value.length > 8 && /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(passwordInput.value)) {
            return true;
        }
        else {
            alert("Password Rules: \n            1. Assert a string has at least one number.\n            2. Assert a string has at least one special character.");
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
};
