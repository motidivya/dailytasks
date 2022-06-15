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
            navbarButtons[1].setAttribute('class', '');
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
            navbarButtons[2].setAttribute('class', '');
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
            navbarButtons[3].setAttribute('class', '');
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
            navbarButtons[4].setAttribute('class', '');
        }else{
            navbarButtons[4].setAttribute('class', 'active');
            navbarButtons[1].setAttribute('class', '');
            navbarButtons[2].setAttribute('class', '');
            navbarButtons[3].setAttribute('class', '');
            navbarButtons[0].setAttribute('class', '');
        }
    });
    
    var bookButtons = [];
    for(var i = 1; i<=2; i++){
        bookButtons.push(document.querySelector(`.header-tab div:nth-child(${i})`));
    }

    bookButtons[0].addEventListener('click', ()=>{
        if(bookButtons[0].classList.contains('active-tab')){
            bookButtons[0].classList.remove('active-tab');
        }else{
            bookButtons[0].classList.add('active-tab');
            bookButtons[1].classList.remove('active-tab');
        }
    });

    bookButtons[1].addEventListener('click', ()=>{
        if(bookButtons[1].classList.contains('active-tab')){
            bookButtons[1].classList.remove('active-tab');
        }else{
            bookButtons[1].classList.add('active-tab');
            bookButtons[0].classList.remove('active-tab');
        }
    });
    
    // JSON Parsing Starts
    fetch("../../data.json").then(response => {
        return response.json();
    }).then(data => useData(data));
     function useData(data){
        for(course of data.courses){
            console.log(course.name);
        }
    }
    // JSON Parsing Ends

}


// window.onloaad = ()=>{
    // var navbarButton1 = document.querySelector('.navigation p:nth-child(1)');
    // var navbarButton2 = document.querySelector('.navigation p:nth-child(2)');
    // var navbarButton3 = document.querySelector('.navigation p:nth-child(3)');
    // var navbarButton4 = document.querySelector('.navigation p:nth-child(4)');
    // var navbarButton5 = document.querySelector('.navigation p:nth-child(5)');

    // navbarButtons[1].addEventListener('click', ()=>{
    //     navbarButtons[1].setAttribute('class', 'active')
    // })

    // navbarButtons[2].addEventListener('click', ()=>{
    //     navbarButtons[2].setAttribute('class', 'active')
    // })

    // navbarButtons[3].addEventListener('click', ()=>{
    //     navbarButtons[3].setAttribute('class', 'active')
    // })

    // navbarButtons[4].addEventListener('click', ()=>{
    //     navbarButtons[4].setAttribute('class', 'active')
    // })


    // for(var j = 1; j<=5;j++){
    //     navbarButtons[j].addEventListener('click', ()=>{
    //         if(navbarButtons[j].style.border === 'none'){
    //             navbarButtons[j].style.border = '10px solid black';
    //         }
    //         for(var k=1;k<=5;k++){
    //             if(j != k){
    //                 navbarButtons[k].style.border = 'none';
    //             }
    //         }
    //     })
    //     // console.log(nav);
    // }

    // navbarButton1.addEventListener('click', function(){
    //     if(navbarButton1.style.border !== 'none'){
    //         // Do Nothing
    //     }else if(navbarButton1.style.border === 'none'){
    //         navbarButton1.style.border = '10px solid black';
    //         navbarButton2.setAttribute('class', '');
    //         navbarButton3.setAttribute('class', '');
    //         navbarButton4.setAttribute('class', '');
    //         navbarButton5.setAttribute('class', '');
    //     }
    // })

    // navbarButton2.addEventListener('click', function(){
    //     if(navbarButton2.style.border !== 'none'){
    //         // Do Nothing
    //     }else if(navbarButton2.style.border === 'none'){
    //         navbarButton2.style.border = '10px solid black';
    //         navbarButton1.setAttribute('class', '');
    //         navbarButton3.setAttribute('class', '');
    //         navbarButton4.setAttribute('class', '');
    //         navbarButton5.setAttribute('class', '');
    //     }
    // })
// }