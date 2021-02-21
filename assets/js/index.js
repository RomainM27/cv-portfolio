window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("scroll" , () => {
        let header = document.querySelector("header");
        let logoColor = document.querySelector(".logo__header svg path");
        header.classList.toggle("sticky", window.scrollY > 0);
        logoColor.classList.toggle("white",window.scrollY > 0);
    })


    // simple function to use for callback in the intersection observer
    const changeNav = (entries, observer) => {
        entries.forEach((entry) => {
            // verify the element is intersecting
            if(entry.isIntersecting && entry.intersectionRatio >= 0.45) {
                // remove old active class
                document.querySelector('ul li .active').classList.remove('active');
                // get id of the intersecting section
                var id = entry.target.getAttribute('id');
                // find matching link & add appropriate class
                if (992 < window.visualViewport.width){
                    var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
                }else{
                    var newLink = document.querySelector(`.mobile [href="#${id}"]`).classList.add('active');
                }
            }
        });
    }

    // init the observer
    const options = {
        threshold: 0.45
    }

    const observer = new IntersectionObserver(changeNav, options);

    // target the elements to be observed
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        observer.observe(section);
    });
});