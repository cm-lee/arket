window.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.querySelector('.js-hamburger');
    const navPanel = document.querySelector('.nav');
    const navCloseBtn = document.querySelector('.js-nav-close');

    hamburger.addEventListener('click', function(e){
        e.preventDefault();

        if (navPanel.classList.contains('is-active')){
            navPanel.classList.remove('is-active');
            document.body.style.overflow = 'auto';
        }else{
            navPanel.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        }
    });

    navCloseBtn.addEventListener('click', function(e){
        e.preventDefault();

        navPanel.classList.remove('is-active');
        document.body.style.overflow = 'auto';
    })
});