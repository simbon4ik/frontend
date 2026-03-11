//1 task
let count = localStorage.getItem("number_of_visits");
if (count)
    count = Number(count);
else
    count = 0;
count += 1;
localStorage.setItem("number_of_visits", count);

alert(`Количество заходов: ${count}`);

/*
    2 task
    links:
    https://placehold.co/300x200.png
    https://placehold.co/300x200?text=Hello
    https://dummyimage.com/300x200/000/fff.png&text=Test
*/

async function LoadImageByLink(url) {
    if (url.trim() === "")
        throw new Error("Can't load image")
    let responce = await fetch(url);
    if (!responce.ok)
        throw new Error("Can't load image")
    console.log(responce)
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

//3 Task

/*
    2 task
    links:
    https://placehold.co/300x200.png
    https://placehold.co/300x200?text=Hello
    https://dummyimage.com/300x200/000/fff.png&text=Test
*/

function error_func() { 
    let p = document.createElement("p");
    p.textContent = "Can't load image";
    document.body.appendChild(p);
    return -1;
}
async function AsyncLoadImageByLink(url) {
    if (url.trim() === "")
        return error_func();
    let responce = await fetch(url);
    if (!responce.ok)
        return error_func();
    console.log(responce)
    let BlobURL = URL.createObjectURL(await responce.blob());
    let image = document.createElement("img");
    image.src = BlobURL;
    document.body.appendChild(image);
    return 0;
}

for (let i = 0; i < 5; ++i) {
    let image_link = prompt(`Введите ссылку на изображение ${i + 1}`);
    AsyncLoadImageByLink(image_link)
}

//Task 4

//a
function LoadImageByLinkWithoutAsyncDir(url) {
    if (url.trim() === "")
        throw new Error("Can't load image")
    return fetch(url)
        .then(function(responce) {
            if (!responce.ok)
                throw new Error("Can't load image");
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

let images_async = [];
for (let i = 0; i < 5; ++i) {
    let image_link = prompt(`Введите ссылку на изображение ${i + 1}`);
    images_async.push(LoadImageByLinkWithoutAsyncDir(image_link))
}

Promise.allSettled(images_async).then(function(result) {
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

//b 
function LoadImageByLinkWithoutAsync(url) {
    if (url.trim() === "")
        throw new Error("Can't load image")
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
                let p = document.createElement("p");
                p.textContent = "Can't load image";
                document.body.appendChild(p);
                return Promise.reject(-1);   
            })
};

let images_async_random = [];
for (let i = 0; i < 5; ++i) {
    let image_link = prompt(`Введите ссылку на изображение ${i + 1}`);
    images_async_random.push(LoadImageByLinkWithoutAsync(image_link))
}
