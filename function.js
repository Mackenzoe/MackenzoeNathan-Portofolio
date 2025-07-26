const ScrollUp = document.querySelector('.up');
window.onscroll = () => {
    if(window.scrollY > 500){
        ScrollUp.classList.add('up-active');
    } else{
        ScrollUp.classList.remove('up-active');
    }
};