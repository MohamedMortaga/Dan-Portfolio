window.addEventListener('scroll', function () {
    const navbar1 = document.getElementById('navbar1');
    const navbar2 = document.getElementById('navbar2');
    if(window.scrollY> screen.height-100) {   //lw wslt lelb3d home
        navbar1.style.opacity = '0';
        navbar1.style.pointerEvents = 'none'    
        navbar2.classList.add('active');         //2ft7le nav2
        document.body.classList.add('navbar-active');
    } 
    else {
        navbar1.style.opacity = '1';
        navbar1.style.pointerEvents = 'auto';  //lw l2 2flo
        navbar2.classList.remove('active');
        document.body.classList.remove('navbar-active');
    }
});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');          //kol 2l sections
    const navLinks = document.querySelectorAll('.navbar1 .nav-link, .navbar2 .nav-link');  //kol 2l links
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 80) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
document.querySelectorAll('.navbar-toggler').forEach(toggler => {
    toggler.addEventListener('click', function () {
        const targetId = this.getAttribute('data-bs-target');
        const collapseElement = document.querySelector(targetId);
        if (collapseElement.classList.contains('show')) {
            collapseElement.classList.remove('show');
        } else {
            collapseElement.classList.add('show');
        }
    });
});
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const collapseElement = this.closest('.navbar-collapse');
        if (collapseElement.classList.contains('show')) {
            collapseElement.classList.remove('show');
        }
    });
<<<<<<< Updated upstream
});
=======
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
});
>>>>>>> 48fef0006739ffce089e972596074c2cade3cd3f
=======
});
>>>>>>> 48fef0006739ffce089e972596074c2cade3cd3f
>>>>>>> Stashed changes
