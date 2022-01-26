let li = document.querySelectorAll('.stavke');
console.log(li);

li.forEach(li=>{
    li.addEventListener('click',()=>{
        // console.log('test');
        // if(li.style.textDecoration == "line-through"){
        //     li.style.textDecoration = "none";
        //     li.style.color = "rgb(117, 238, 117)";
        // }else{
        //     li.style.textDecoration = "line-through";
        //     li.style.color = "red";
        // }


        //2. nacin
        li.classList.toggle('crossed');
    });
});



