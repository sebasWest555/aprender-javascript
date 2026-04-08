let articles = document.querySelector(".layout__articles");

let post = [
    {
        title: "articulo de prueba 1",
        date: "6/3/2026",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium accusantium facilis, corrupti perspiciatis delectus impedit adipisci facere iste ut fugiat officia. Placeat, quam quasi ipsa vel laborum quisquam impedit est?"
    },
    {
        title: "articulo de prueba 2",
        date: "4/3/2026",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium accusantium facilis, corrupti perspiciatis delectus impedit adipisci facere iste ut fugiat officia. Placeat, quam quasi ipsa vel laborum quisquam impedit est?"
    },
    {
        title: "articulo de prueba 3",
        date: "23/3/2026",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium accusantium facilis, corrupti perspiciatis delectus impedit adipisci facere iste ut fugiat officia. Placeat, quam quasi ipsa vel laborum quisquam impedit est?"
    },
    {
        title: "articulo de prueba 4",
        date: "14/3/2026",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium accusantium facilis, corrupti perspiciatis delectus impedit adipisci facere iste ut fugiat officia. Placeat, quam quasi ipsa vel laborum quisquam impedit est?"
    }
];

post.forEach(article => {

    articles.innerHTML += `
        <article class="article__article">
                <h3 class="article__title">${article.title}</h3>
                <span class="article__date">${article.date}</span>
                <p class="article__body">
                    ${article.body}    
                </p>
                <a href="#" class="article__btn">leer mas</a>
        </article>
    `

})