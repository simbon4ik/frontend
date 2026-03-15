//3 Task
 /*   3 task
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