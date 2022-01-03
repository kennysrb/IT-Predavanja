let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori!",
    likes: 50,
    dislikes: 60
};


let arrBlogs = [blog1, blog2, blog3];

arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog);
});

arrBlogs.forEach(el =>{
    document.body.innerHTML += `<h3>${el.title}</h3>`;
    document.body.innerHTML += `<p style="background-color: green; color: white; display:inline-block; margin-right: 10px; padding: 3px; border-radius: 3px; width: 85px; text-align: center;">Likes: ${el.likes}</p>`;
    document.body.innerHTML += `<p style="background-color: red; color: white; display:inline-block; padding: 3px; border-radius: 3px; width: 85px; text-align: center;">Dislikes: ${el.dislikes}</p>`;
});


// Ispis objekata pomocu for petlje
for(let i=0; i<arrBlogs.length; i++){
    console.log(arrBlogs[i].title);
};

// Promena vrednosti elementa
// blog3.title = "Napredni HTML tagovi";
// console.log(blog3.title);
// arrBlogs[2].title = "HTML5 tagovi";
// console.log(arrBlogs[2].title);

// console.log(arrBlogs);




// 1. Napraviti arrow funkciju ojoj se prosledjuje niz objekata a ona vraca ukupan broj lajkova

let sumLikes = arr => {
    let sum = 0;
    arr.forEach(blog =>{
        sum+= blog.likes;
    });
    return sum;
};

let sumDislikes = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+= arr[i].dislikes;
    };
    return sum;
}

console.log(sumLikes(arrBlogs));
console.log(sumDislikes(arrBlogs));


// 2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let avgLikes = arr => {
    let sum = 0;
    arr.forEach(el=>{
        sum += el.likes;
    });
    let avg = sum / arr.length;
    return avg;
};

console.log(avgLikes(arrBlogs));

//3. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let moreLikes = arr => {
    for( let i = 0; i < arr.length; i++){
        if(arr[i].likes > arr[i].dislikes){
            console.log(arr[i].title);
        }
    };
};


moreLikes(arrBlogs);

//3. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena


let double = arr => {
    for(let i = 0; i< arr.length; i++){
        if(arr[i].likes / arr[i].dislikes >= 2){
            console.log(arr[i].title);
        }
    };
};

double(arrBlogs);



//4. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = arr => {

    for(let i=0; i< arr.length; i++){
        if(arr[i].title.endsWith("!")){
            console.log(`Naslovi koji se zavrsavaju sa "!":`, arr[i].title);
        };
    };
};

uzvicnik(arrBlogs);
