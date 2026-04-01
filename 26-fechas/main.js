//objeto date

let fechaactual = new Date();

console.log(fechaactual.getFullYear());
console.log(fechaactual.getMonth());
console.log(fechaactual.getDate());
console.log(fechaactual.getMilliseconds());
console.log(fechaactual.getDay());

console.log(`fecha completa: ${fechaactual.getDate()}/${fechaactual.getMonth()+1}/${fechaactual.getFullYear()}`)