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
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

let blog4 = {
    title: "Uvod u JS",
    likes: 150,
    dislikes: 50
};

let blog5 = {
    title: "IF naredba grananja",
    likes: 250,
    dislikes: 160
};

let arrBlogs = [blog1, blog2, blog3,blog4,blog5];

arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog);
});

arrBlogs.forEach(el =>{
    document.body.innerHTML += `<h3>${el.title}</h3>`;
    document.body.innerHTML += `<p style="background-color: green; color: white; display:inline-block; margin-right: 10px; padding: 3px; border-radius: 3px; width: 85px; text-align: center;">Likes: ${el.likes}</p>`;
    document.body.innerHTML += `<p style="background-color: red; color: white; display:inline-block; padding: 3px; border-radius: 3px; width: 85px; text-align: center;">Dislikes: ${el.dislikes}</p>`;
});


let user1 = {
    username: "kennysrb",
    age: 29,
    blogs: [blog1, blog2, blog3],
    myLikes: function(){
        let s = 0;
        this.blogs.forEach(el=>{
            s += el.likes;
        });
        return s;
    }
};

let user2 = {
    username: "StefanStanimirovic",
    age: 32,
    blogs: [blog4, blog5],
    myLikes: function(){
        let s = 0;
        this.blogs.forEach(el=>{
            s += el.likes;
        });
        return s;
    }
};



//Ispis 
console.log(user1.username);

//Podaci o prvom blogu korisnika 1
console.log(user1.blogs[0]);

//Naslov prvog bloga korisnika 1
console.log(user1.blogs[0].title);

//niz korisnika
let users = [user1, user2];

// ko su autori blogova?
users.forEach(u=> {
    console.log(u.username);
});

// 1. ZADATAK
console.log('1. ispisati sve naslove blogova koje su ispisali autori iz users');


users.forEach(u=>{
    //U je jedan user iz niza
    let blogsU = u.blogs; //Svi blogovi tekuceg korisnika
    blogsU.forEach(b=>{
        console.log(b.title);
    });
});

// 2. ZADATAK 
console.log('2. Ispisati imena onih autora koji imaju ispod 30 godina');


users.forEach(u=>{
    if(u.age < 30){
        console.log(u.username);
    };
});





// 3. ZADATAK
console.log(`3. Ispisati naslove onih blogova koji imaju više od 50 lajkova`);


users.forEach(u=>{
    let blogsU = u.blogs;
    blogsU.forEach(b=>{
        if(b.likes > 50){
            console.log(b.title);
        };
    });
});

// 4. ZADATAK
console.log('4. Ispisati sve blogove autora čiji je username "JohnDoe"');
users.forEach(u=>{
    let blogsU = u.blogs;
    if(u.username == "StefanStanimirovic"){
        blogsU.forEach(b=>{
            console.log(b.title);
        });
    };
});

// 5. ZADATAK
console.log(`5. Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali`);






users.forEach(u=>{
    let sumaLajkova = 0;
    let blogsU = u.blogs;   
    blogsU.forEach(b=>{
        sumaLajkova += b.likes;
    })
    if(sumaLajkova > 100){
        console.log(`Autor blogova sa vise od 100 lajkova su: ${u.username}`);
    }; 

});



// JELENIN NACIN

users.forEach(u=>{
    let sumaLajkovaU = 0;
    u.blogs.forEach(b=>{
        sumaLajkovaU += b.likes;
    });
    if(sumaLajkovaU >200){
        console.log(`Autor blogova sa vise od 100 lajkova su: ${u.username}`);  
    }
});

// JELENIN NACIN PREKO METODE "myLikes"
users.forEach(u=>{
    if(u.myLikes() > 50){
        console.log(`Korisnik preko 50 lajkova preko metode: ${u.username}`);
        
    }
});

//6. ZADATAK PREKO METODA
console.log('6. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena');

let globalAvgLikes = arr =>{
    let globalSum =0; // SUMA LAJKOVA SVIH KORISNIKA
    let globalBr =0; // BROJ BLOGOVA SVIH KORISNIKA
    arr.forEach(u => {
        globalSum += u.myLikes(); // dodaj koliko je pojedinacni korisnik imao ukupono lajkova za sve svoje blogove
        globalBr += u.blogs.length; // dodaj koliko je pojedinacni korisnik imao blogova
    });
    return globalSum/globalBr;
};

console.log(`Globalan prosek lajkova je ${globalAvgLikes(users)}`);

let blogoviSaNatprosecnoLajkova = arr =>{
    let globalAvg =globalAvgLikes(arr);
    arr.forEach(u=>{
        u.blogs.forEach(b=>{
            if(b.likes > globalAvg){
                console.log(b.title);
            }
        });
    });
};
console.log(`Ispis naslova blogova sa natprosecnim brojem lajkova:`);
blogoviSaNatprosecnoLajkova(users);


//MOJ NACIN 

let sumaLajkova = 0;
let br = 0;
users.forEach(u=>{
    let blogsU = u.blogs;   
    blogsU.forEach(b=>{
        sumaLajkova += b.likes;
        br++;
    })
});

console.log(`SUMA JE ${sumaLajkova}`);

let likeAvg = sumaLajkova/br;
console.log(`Prosek je ${likeAvg}`);

users.forEach(u=>{
    let blogsU = u.blogs;  
    blogsU.forEach(b=>{
        if(b.likes > likeAvg){
            console.log(b.title);
        }; 
    });
});


// 7. ZADATAK
console.log('Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena');

let sumaDislajkova = 0;
users.forEach(u=>{
    let blogsU = u.blogs;   
    blogsU.forEach(b=>{
        sumaDislajkova += b.dislikes;
    })
});

let dislikeAvg = sumaDislajkova/br;
console.log(`Prosek dislike je: ${dislikeAvg}`);

users.forEach(u=>{
    let blogsU = u.blogs;
    blogsU.forEach(b=>{
        if(b.likes > likeAvg && b.dislikes < dislikeAvg){
            console.log(`Blogovi sa boljim prosekom su ${b.title}`);
        };
    });
});







