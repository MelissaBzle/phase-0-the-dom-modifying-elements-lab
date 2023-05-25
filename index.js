//remove main 
const main = document.querySelector('main#main');
main.remove();

// create newHeader variable 
const newHeader = document.createElement("h1");

// create id = "victoy"
 newHeader.id = "victory";

// add text
newHeader.innerHTML = "Melissa is the champion";

