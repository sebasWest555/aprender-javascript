window.addEventListener("load", () => {

    let btnPrev = document.querySelector(".slider__btn-prev");
    let btnNex = document.querySelector(".slider__btn-next");
    let slides = document.querySelectorAll(".slides__item");

    let counter = 0;
    let allSlides = slides.length;

    //limpiar activados

    let clearActives = () => {
        slides.forEach(slide => {
            slide.classList.remove("slides__item--active");
        });
    };

    //activar slide

    let activeSlide = (index) => {
        clearActives();

        slides[index].classList.add("slides__item--active");

    }

    //boton siguiente

    btnNex.addEventListener("click", () => {

        //slides.className = "slides__item--active";
        counter++;
        if (counter >= allSlides) {
            counter = 0;
        }

        activeSlide(counter);
    });

    //btn aterior

    btnPrev.addEventListener("click", () => {

        //slides.className = "slides__item--active";
        counter--;
        if (counter < 0) {
            counter = allSlides - 1; //ultimo slide
        }

        activeSlide(counter);
    });



});