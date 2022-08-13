var x = document.getElementById("contain");

x.addEventListener("click", myFunction);
document.body.addEventListener("click", () => {
    document.getElementById("nav").classList.remove('open')
});

function myFunction(e) {
    e.stopPropagation();
    var element = document.getElementById("nav");
    element.classList.toggle("open");
}