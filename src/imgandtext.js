const imgandtext1 = function () { 
const content = document.getElementById("content");
const imgBackground = document.createElement("img");
imgBackground.src = "img/frontImage.jpg";
imgBackground.classList.add ("frontImage")
content.appendChild (imgBackground);
const title = document.createElement ('p');
title.classList.add("titulo");
title.textContent = "Fefe's Winery";
content.appendChild (title);
const quote = document.createElement ('p');
quote.classList.add("quote");
quote.textContent = "It is the wine that leads me on, the wild wine that sets the wisest man to sing at the top of his lungs, laugh like a fool – it drives the man to dancing... it even tempts him to blurt out stories better never told. ― Homer, The Odyssey";
content.appendChild (quote);
}
export default imgandtext1