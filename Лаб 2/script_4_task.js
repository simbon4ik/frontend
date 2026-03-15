//Task 4
/*
    links:
    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png
    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png
    */

//a
function LoadImageByLinkWithoutAsyncDir(url) {
    if (url.trim() === "")        
        return Promise.reject(-1);   
    return fetch(url)
        .then(function(responce) {
            if (!responce.ok)
                return Promise.reject(-1);   
            return responce.blob();
            })
            .then(function(blob) {
                let BlobURL = URL.createObjectURL(blob);
                return Promise.resolve(BlobURL);    
            })
        .catch(function() {
            return Promise.reject(-1);   
        })
};

let images_without_async_random = [];
for (let i = 0; i < 5; ++i) {
    let image_link = prompt(`Введите ссылку на изображение ${i + 1}`);
    images_without_async_random.push(LoadImageByLinkWithoutAsyncDir(image_link))
}

Promise.allSettled(images_without_async_random).then(function(result) {
    result.forEach(function(block) {
        if (block.status == "rejected") {
            let p = document.createElement("p");
            p.textContent = "Can't load image";
            document.body.appendChild(p);
        } else {
            let image = document.createElement("img");
            image.src = block.value;
            document.body.appendChild(image);
        }
        })
});