function show()
{
    var drop = document.getElementsByClassName("drop-content")[0];
    if(drop.style.display === "none")
    {
        drop.style.display = "block";
    }
    else{
        drop.style.display = "none";
    }
}

var books_drop = [
    {
    "description" : "Book1"
},
{
    "description" : "Book2"
},
{
    "description" : "Book3"
}
]

var drop_final = [], y;
var bookstypes = document.querySelector('.drop-content');
for(var i=0; i<books_drop.length;i++){
    y = `<a href = "#">${books_drop[i].description}</a>`
drop_final.push(y);
}
bookstypes.innerHTML = drop_final.join('');
