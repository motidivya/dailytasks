const img = document.querySelector(".img-main");

let images = [
    {"src": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", "alt": "Forest"},
    {"src": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", "alt": "Foggy mountains"},
    {"src": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400", "alt": "Bridge in forest"},
    {"src": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", "alt": "Flower field"},
    {"src": "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400", "alt": "Green trees"}
];

function loadImage() {
    let src = img.getAttribute("src");
    let imageInfo = images[Math.floor(Math.random() * images.length)];
    while(src === imageInfo.src) {
        imageInfo = images[Math.floor(Math.random() * images.length)];
    }
    
    img.setAttribute("src", imageInfo.src);
    img.setAttribute("alt", imageInfo.alt);
}

img.addEventListener("click", () => {
    loadImage();  
});

document.body.addEventListener("keydown", e => {
    if(e.key === " ") {
        loadImage();
    }
});

loadImage();