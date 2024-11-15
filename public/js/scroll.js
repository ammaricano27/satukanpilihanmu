function onScroll() {
    const header = document.getElementById("header")
    if (window.scrollY > 0) {
        header.classList.add("bg-[#242F9B]")
        header.classList.add("shadow")
    } else {
        header.classList.remove("bg-[#242F9B]")
        header.classList.remove("shadow")
    }
}

document.addEventListener("scroll", onScroll)


function navbar() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('text-yellow-400');
                document.querySelector('.nav-link[href*=' + id + ']').classList.add('text-yellow-400');
            });
        }
    });

    const drawer = document.getElementById("drawer")
    const drawerButton = document.getElementById("header-drawer-button")
    drawer.classList.remove('open');
    drawerButton.classList.remove('open');
};

document.addEventListener("scroll", navbar)


function drawerNavbar() {
    const sections = document.querySelectorAll('section');
    let drawerLinks = document.querySelectorAll('.nav-link-drawer')

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            drawerLinks.forEach(link => {
                link.classList.remove('text-yellow-400');
                document.querySelector('.nav-link-drawer[href*=' + id + ']').classList.add('text-yellow-400');
            });
        }
    });
}

document.addEventListener("scroll", drawerNavbar)


function animate() {
    const animateElements = document.querySelectorAll('.animate')

    animateElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show')
        }, index * 150)
    });
}

document.addEventListener("DOMContentLoaded", animate)
