function onScroll() {
    const header = document.getElementById("header")
    if (window.scrollY > 0) {
        header.classList.add("bg-blue-700")
        header.classList.add("shadow")
    } else {
        header.classList.remove("bg-blue-700")
        header.classList.remove("shadow")
    }
}

document.addEventListener("scroll", onScroll)
