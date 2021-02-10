const IMAGE = document.querySelectorAll("img");
const SIZES = {
    showcare: "100vw",
    reason: "(max-width: 799px) 100vw, 272px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px",
};

function imaSrcSet(imgSrc) {
    var markup = [];
    var width = 400;

    for( var i=0; i<=5; i++) {
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width+=400;
    }

    return markup.join();

}

for(var i=0; i<=IMAGE.length; i++) {
    let imgSrc = IMAGE[i].getAttribute("src");
    console.log(imgSrc);
    imgSrc = imgSrc.slice(0, -8);
    let imageSet = imaSrcSet(imgSrc);
    console.log(imageSet);

    let type = IMAGE[i].getAttribute("data-type");
    let size = SIZES[type];
    console.log(size);
}