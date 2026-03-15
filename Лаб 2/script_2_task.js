/*
    2 task
    links:
    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png
    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png
*/

async function LoadImageByLink(url) {
    if (url.trim() === "")
        throw new Error("Can't load image")
    let responce = await fetch(url);
    if (!responce.ok)
        throw new Error("Can't load image")
    let BlobURL = URL.createObjectURL(await responce.blob());
    return BlobURL;
}

let images = [];
for (let i = 0; i < 5; ++i) {
    let image_link = prompt(`Введите ссылку на изображение ${i + 1}`);
    images.push(LoadImageByLink(image_link))
}

Promise.allSettled(images).then(function(result) {
    result.forEach(function(block) {   
        if (block.status == "rejected"){
            let p = document.createElement("p");
            p.textContent = "Can't load image";
            document.body.appendChild(p);
        }
        else {
            let image = document.createElement("img");
            image.src = block.value;
            document.body.appendChild(image);
        }
    });
});