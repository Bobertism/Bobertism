var bobertGallery = document.getElementById("bobert-gallery");

var bobertNames = Object.keys(BOBERT_LIST)

async function copySmallBobert(){
    const img = await fetch("boberts/small/" + this.id + ".png");
    const blob = await img.blob();
    await navigator.clipboard.write([
        new ClipboardItem({ 'image/png' : blob })
    ]);
}

for(var i = 0; i < bobertNames.length; i++) {
    let bobertName = bobertNames[i];
    let bobertDiv = document.createElement("div");
        bobertDiv.id = bobertName;
        bobertDiv.classList.add("bobert-item");

    bobertDiv.addEventListener("click", copySmallBobert);

    var bobertImage = document.createElement("img");
        bobertImage.classList.add("bobert-image");
        bobertImage.src = "boberts/large/" + bobertName + ".png";
        bobertImage.alt = BOBERT_LIST[bobertName].description;
    
    bobertDiv.appendChild(bobertImage);
    bobertGallery.appendChild(bobertDiv);
}