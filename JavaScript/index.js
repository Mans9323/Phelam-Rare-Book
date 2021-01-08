function validate()
{
    var text = document.getElementsByClassName("text1")[0].value;
    const emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
    if(emailRegex.test(text))
    {
        alert("Thanku for Subscribing!")
    }
    else{
        alert("Invalid Email")
    }
}   

function validate1()
{
    var mailtext = document.getElementsByClassName("text2")[0].value;
    const emailRegex1 = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
    var Nametext = document.getElementsByClassName("Name")[0].value;
    var messagetext = document.getElementsByClassName("Message")[0].value;
    if(emailRegex1.test(mailtext) == 0 && Nametext !=null && messagetext !=null)
    {
        alert("Re-enter Details")
    }
    else{
        alert(" Thanks for Contacting")
    }
}


var books = [
    {
        "url" : "./images/Capture4.PNG",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies"
    },
    {
        "url" : "./images/Capture5.PNG",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies"
    },
    {
        "url" : "./images/Capture6.PNG",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies"
    },
    {
        "url" : "./images/Capture3.PNG",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies"
    },
    {
        "url" : "./images/Capture8.PNG",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies"
    },
    {
        "url" : "./images/Capture9.PNG",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies"
    }

]
var books_final=[], x;
var bookcategories = document.querySelector('.book-display');
for(var i =0; i<books.length; i++){
    x = `<div class = 'box'>
    <a href = "products.html">
    <img src="${books[i].url}">
    </a>
    <p>"${books[i].description}"</p>
</div>`
books_final.push(x);
}
bookcategories.innerHTML = books_final.join('');



