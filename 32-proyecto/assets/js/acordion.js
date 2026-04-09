let collapses = document.querySelectorAll(".acordion__collapse");

collapses.forEach(collapse => {

    let header = collapse.querySelector(".collapse__header");

    header.addEventListener("click", () => {
        collapse.classList.toggle("acordion__collapse--open")
    });

});
