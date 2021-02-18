window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("scroll" , () => {
        let header = document.querySelector("header");
        let logoColor = document.querySelector(".logo__header svg path");
        header.classList.toggle("sticky", window.scrollY > 0);
        logoColor.classList.toggle("white",window.scrollY > 0);
    })
    // intersection observer setup
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // si 10% de l ecran est occupe par l element
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // get the nav item corresponding to the id of the section
                // that is currently in view
                const navItem = entry.target.getAttribute('id');
                // add 'active' class on the navItem
                if (992 < window.visualViewport.width){
                    document.querySelector(`ul li a[href="#${navItem}"]`).classList.add('active');
                }else{
                    document.querySelector(`.mobile li a[href="#${navItem}"]`).classList.add('active');
                }
                // remove 'active' class from any navItem that is not
                // same as 'navItem' defined above
                if (992 < window.visualViewport.width){
                    document.querySelectorAll("header nav ul li a").forEach((item) => {
                        if (item.getAttribute("href") != `#${navItem}`) {
                        item.classList.remove('active');
                        }
                    });
                }else{
                    document.querySelectorAll(".mobile li a").forEach((item) => {
                        if (item.getAttribute("href") != `#${navItem}`) {
                        item.classList.remove('active');
                        }
                    });
                }
               
            }
          });
      }, observerOptions);
    
      // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});