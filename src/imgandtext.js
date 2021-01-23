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
quote.textContent = "It is the wine that leads me on  the wild wine \n that sets the wisest man to sing \n at the top of his lungs, \n laugh like a fool – it drives the \n man to dancing... it even \n tempts him to blurt out stories \n better never told. \n ― Homer, The Odyssey";
content.appendChild (quote);
return 3;
}
export default imgandtext1