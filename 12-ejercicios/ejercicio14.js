/*
un dj quiere que le digas que musica quieres,
hay de diferentes geners, rap, rock y pop,
a lo cual el usuario le tiene que indicar que genero quiere,
y sonara una cancion de ese genero
*/

let genero = prompt("que te pones mexicano? (rap, rock, pop)");

switch (genero) {
    case "rap":
        alert("sonando stronger de kanye west");
        break;

    case "rock":
        alert("esta sonando la gorda de atras de los guayabers");
        break;

    case "pop":
        alert("sonando de mi de camila");
        break;
    default:
        alert("ni quien tope a esos we");
        break;
}