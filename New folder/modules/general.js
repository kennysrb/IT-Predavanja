let generateImage = src =>{
    let img = document.createElement('img');
    img.src = src;
    img.style.width = "250px";
    return img;
};

export default generateImage;



