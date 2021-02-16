(() =>{
    window.addEventListener("scroll" , () => {
        let header = document.querySelector("header");
        let logoColor = document.querySelector(".logo__header svg path");
        header.classList.toggle("sticky", window.scrollY > 0);
        logoColor.classList.toggle("white",window.scrollY > 0);
    })
}) ();