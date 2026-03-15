//Task 4_as
/*
    links:
    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png
    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png
*/

function func_error(){
        let p = document.createElement("p");
        p.textContent = "Can't load image";
        document.body.appendChild(p);
        return Promise.reject(-1);
}

function LoadImageByLinkWithoutAsync(url) {
    if (url.trim() === "") {
        return func_error()
    }  
    return fetch(url)
        .then(function(responce) {
            if (!responce.ok)
                throw new Error("Can't load image");
            return responce.blob();
            })
            .then(function(blob) {
                let BlobURL = URL.createObjectURL(blob);
                let image = document.createElement("img");
                image.src = BlobURL;
                document.body.appendChild(image);
                return Promise.resolve(0);    
            })
        .catch(function() {
            return func_error();   
        })
};

let images_without_async = [];
for (let i = 0; i < 5; ++i) {
    let image_link = prompt(`Введите ссылку на изображение ${i + 1}`);
    LoadImageByLinkWithoutAsync(image_link).catch(function(){});
}