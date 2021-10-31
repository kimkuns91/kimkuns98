const images = []
for (let i = 1; i <= 4; i++){
    images.push(`${i}.jpg`)
}

const img = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url("src/img/${img}")`;
