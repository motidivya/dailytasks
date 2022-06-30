window.onload = ()=>{
    const username = document.getElementById('username') as HTMLInputElement;
    const submitButton = document.getElementById('submit') as HTMLButtonElement;
    const alertElement: HTMLDivElement = document.querySelector('.alert-element');
    const secondAlertElement: HTMLDivElement = document.querySelector('.second-aria');
    submitButton.addEventListener('click', ()=>{
        if(username.value.length <8){
            alertElement.setAttribute('aria-live', 'assertive');
            alertElement.style.display = 'block';
        }else{
            console.log('loveyou moti❤');
        }
    });

    alertElement.addEventListener('click', ()=>{
        alertElement.style.display = 'none';
        alertElement.removeAttribute('aria-live');
    });

    secondAlertElement.addEventListener('click', ()=>{
        if(alertElement.style.display = 'block'){
            secondAlertElement.style.display = 'block';
        }
    })

}


