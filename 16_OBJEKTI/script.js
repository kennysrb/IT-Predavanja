let telefon = {
    color: 'black',
    size: 13,
    camera: true
};

console.log(telefon);
console.log(typeof(telefon));

let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Nikola"
};

console.log(blog1);

console.log(telefon.camera);

//isis poperty-a 2 nacina
console.log(blog1.title);
console.log(blog1["title"]);

//izmene property-a
blog1.title = "Osnove HTML-a";
console.log(blog1.title);
blog1["author"] = "Nikola Glavonjic";
console.log(blog1);




///////////////////////////////////////////

let user = {
    username: "nikola_kenny",
    age: 29,
    blogs: ["Ice hockey", "Programiranje", "Fitness"],

    //funkcionalnost      // funkcija u objektu je METOD
    login: function(){
        console.log('Ulogovani ste');
    },
    logout: function(){
        console.log('Izlogovani ste');
        
    },
    logBlogs: function() {
        console.log(this);
        console.log(this.blogs);
        this.blogs.forEach(blog =>{
            console.log(blog);
        });
    },
};

let nasloviBlogova = user.blogs;
for(let i = 0; i <nasloviBlogova.length; i++){
    document.body.innerHTML += `<h3 style="color:#333;">${nasloviBlogova[i]}</h3>`;
};

for(let i = 0; i <user.blogs.length; i++){
    document.body.innerHTML += `<h4 style="color:red;">${nasloviBlogova[i]}</h4>`;
};

nasloviBlogova.forEach(el =>{
    document.body.innerHTML += `<h6 style="color:green;">${el}</h6>`;
});


// poziv metoda

user.login();
user.logout();
user.logBlogs();



////////////////////////////////////////////
// OBJEKTI U NIZU









