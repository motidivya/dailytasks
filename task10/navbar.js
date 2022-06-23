window.onload = ()=>{
    var navbarButtons = [];
    for(var i = 1; i<=5; i++){
        navbarButtons.push(document.querySelector(`.navigation p:nth-child(${i})`));
    }

    navbarButtons[0].addEventListener('click', ()=>{
        if(navbarButtons[0].hasAttribute('class') && navbarButtons[0].getAttribute('class') === 'active'){
            // navbarButtons[0].setAttribute('class', '');
        }else{
            navbarButtons[0].setAttribute('class', 'active');
            navbarButtons[1].setAttribute('class', '');
            navbarButtons[2].setAttribute('class', '');
            navbarButtons[3].setAttribute('class', '');
            navbarButtons[4].setAttribute('class', '');
        }
    });
    navbarButtons[1].addEventListener('click', ()=>{
        if(navbarButtons[1].hasAttribute('class') && navbarButtons[1].getAttribute('class') === 'active'){
            // navbarButtons[1].setAttribute('class', '');
        }else{
            navbarButtons[1].setAttribute('class', 'active');
            navbarButtons[0].setAttribute('class', '');
            navbarButtons[2].setAttribute('class', '');
            navbarButtons[3].setAttribute('class', '');
            navbarButtons[4].setAttribute('class', '');
        }
    });
    navbarButtons[2].addEventListener('click', ()=>{
        if(navbarButtons[2].hasAttribute('class') && navbarButtons[2].getAttribute('class') === 'active'){
            // navbarButtons[2].setAttribute('class', '');
        }else{
            navbarButtons[2].setAttribute('class', 'active');
            navbarButtons[1].setAttribute('class', '');
            navbarButtons[0].setAttribute('class', '');
            navbarButtons[3].setAttribute('class', '');
            navbarButtons[4].setAttribute('class', '');
        }
    });
    navbarButtons[3].addEventListener('click', ()=>{
        if(navbarButtons[3].hasAttribute('class') && navbarButtons[3].getAttribute('class') === 'active'){
            // navbarButtons[3].setAttribute('class', '');
        }else{
            navbarButtons[3].setAttribute('class', 'active');
            navbarButtons[1].setAttribute('class', '');
            navbarButtons[2].setAttribute('class', '');
            navbarButtons[0].setAttribute('class', '');
            navbarButtons[4].setAttribute('class', '');
        }
    });
    navbarButtons[4].addEventListener('click', ()=>{
        if(navbarButtons[4].hasAttribute('class') && navbarButtons[4].getAttribute('class') === 'active'){
            // navbarButtons[4].setAttribute('class', '');
        }else{
            navbarButtons[4].setAttribute('class', 'active');
            navbarButtons[1].setAttribute('class', '');
            navbarButtons[2].setAttribute('class', '');
            navbarButtons[3].setAttribute('class', '');
            navbarButtons[0].setAttribute('class', '');
        }
    });
    // ===============================================================
    const hamburgerMenu = document.querySelector('.hamburger');
    const hamburgerPath = document.querySelector('.hamburger svg path:nth-child(2)');
    const hamburgerDetails = document.querySelector('.h-details');
    const ulHeadings = document.getElementsByClassName('ul-heading');
    hamburgerMenu.addEventListener('mouseover', ()=>{
        if(hamburgerPath.getAttribute('fill') == 'white'){
            hamburgerPath.setAttribute('fill', '#3fd28b');
        }else{
            hamburgerPath.setAttribute('fill', 'white');
            hamburgerDetails.style.display = 'block'
        }
    });

    hamburgerMenu.addEventListener('mouseout', ()=>{
        hamburgerPath.setAttribute('fill', '#3fd28b');
        hamburgerDetails.style.display = 'none'
    })

    // hamburgerMenu.addEventListener('focusout', ()=>{
    //     hamburgerPath.setAttribute('fill', '#3fd28b');

    // });

    const contents = document.getElementsByClassName('content');
    // for(var i=0; i<ulHeadings.length; i++){

    //     ulHeadings[i].addEventListener('click', ()=>{
    //         if(contents[i].style.display == 'none'){
    //             contents[i].style.display = 'none'
    //         }else{
    //             contents[i].style.display = 'block'
    //         }
    //         console.log(contents[i])
    //     });
    // }
    
    ulHeadings[0].addEventListener('click', ()=>{
        if(contents[0].style.display != 'none'){
            contents[0].style.display = 'none'
        }else{
            contents[0].style.display = 'block'
        }
    });

    ulHeadings[1].addEventListener('click', ()=>{
        if(contents[1].style.display != 'none'){
            contents[1].style.display = 'none'
        }else{
            contents[1].style.display = 'block'
        }
    });

    ulHeadings[2].addEventListener('click', ()=>{
        if(contents[2].style.display != 'none'){
            contents[2].style.display = 'none'
        }else{
            contents[2].style.display = 'block'
        }
    });

    ulHeadings[3].addEventListener('click', ()=>{
        if(contents[3].style.display != 'none'){
            contents[3].style.display = 'none'
        }else{
            contents[3].style.display = 'block'
        }
    });

    // ====================================================

    const alertsButton = document.querySelector('.notification:nth-child(2)');
    const alertsHover = document.querySelector('.notification:nth-child(2) .adetails');
    const alertsPath = document.getElementById('Forma_1');
    const alertsSpan = document.querySelector('.notification:nth-child(2) span')
    const bottomFixed = document.querySelector('.bottom-fixed')

    alertsButton.addEventListener('mouseover', ()=>{
        bottomFixed.style.display = 'flex';
        alertsSpan.style.display = 'none';
        if( alertsPath.getAttribute('fill') == '#3fd28b'){
            alertsPath.setAttribute('fill', 'white');
        }else{
            alertsPath.setAttribute('fill', '#3fd28b');
        }

        if(alertsHover.style.display != 'none'){
            alertsHover.style.display = 'none'
        }else{
            alertsHover.style.display = 'block'
        }
    });    

    alertsButton.addEventListener('mouseout', ()=>{
        alertsPath.setAttribute('fill', '#3fd28b'); 
        alertsHover.style.display = 'none';
        alertsSpan.style.display = 'block';
        bottomFixed.style.display = 'none';

    })

    const notificationsButton = document.querySelector('.notification:nth-child(1)');
    const notificationsHover = document.querySelector('.notification:nth-child(1) .ndetails');
    const notificationsPath = document.getElementById('Path_3675')
    const notificationsSpan = document.querySelector('.notification:nth-child(1) span')
    const nbottomFixed = document.querySelector('.nbottom-fixed')

    notificationsButton.addEventListener('mouseover', ()=>{
        nbottomFixed.style.display = 'flex';
        notificationsSpan.style.display = 'none';
        if( notificationsPath.getAttribute('fill') == '#3fd28b'){
            notificationsPath.setAttribute('fill', 'white');
        }else{
            notificationsPath.setAttribute('fill', '#3fd28b');
        }

        if(notificationsHover.style.display != 'none'){
            notificationsHover.style.display = 'none'
        }else{
            notificationsHover.style.display = 'block'
        }
    });

    notificationsButton.addEventListener('mouseout', ()=>{
        notificationsPath.setAttribute('fill', '#3fd28b');
        notificationsHover.style.display = 'none'
        notificationsSpan.style.display = 'block';
        nbottomFixed.style.display = 'none';
    })
}