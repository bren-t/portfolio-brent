const anim = document.querySelectorAll(".anim")
const anim2 = document.querySelectorAll(".anim2")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    rootMargin: "-20% 0%",
})

anim.forEach(anim => {
    observer.observe(anim)
})

anim2.forEach(anim2 => {
    observer.observe(anim2)
})