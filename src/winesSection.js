const winesDisplay = () => {
    const content = document.getElementById ("content");
    const winesPosition = document.createElement ("div");
    winesPosition.classList.add ("winesPosition");
    const wineandtexttogether = document.createElement ("div");
    wineandtexttogether.classList.add ("wineandtexttogether");
    const wine1 = document.createElement ("img");
    wine1.src = "img/wine1.jpg";
    wine1.classList.add("wine");
    const titleandparagraph = document.createElement('div');
    titleandparagraph.classList.add ("titleandparagraph");
    const wine1paragraph = document.createElement ("p");
    wine1paragraph.innerHTML = "A wine that blablablab <br> blablablabla <br> blablablabla <br> barbarbarbarbar"
    wine1paragraph.classList.add("paragraph");
    const winetitle = document.createElement ("p");
    winetitle.classList.add ("winetitle");
    winetitle.textContent = "Malbec -2019"
    titleandparagraph.appendChild (winetitle);
    titleandparagraph.appendChild (wine1paragraph);
    wineandtexttogether.appendChild(wine1);
    wineandtexttogether.appendChild(titleandparagraph);
    winesPosition.appendChild(wineandtexttogether);
    content.appendChild (winesPosition);
}

export default winesDisplay