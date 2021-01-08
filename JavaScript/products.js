
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartBookButtons = document.getElementsByClassName('remove')
    for (var i = 0; i < removeCartBookButtons.length; i++) {
        var button = removeCartBookButtons[i]
        button.addEventListener('click', removeCartBook)
    }

    var booksquantity = document.getElementsByClassName('cart-qinput')
    for (var i = 0; i < booksquantity.length; i++) {
        var input = booksquantity[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-book-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-shop')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-books')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartBook(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('buy-book-head')[0].innerText
    var price = shopItem.getElementsByClassName('buy-book-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('buy-book-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-book-row')
    var cartItems = document.getElementsByClassName('cart-books')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-book-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-list">
            <img class="cart-book-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-book-title">${title}</span>
        </div>
        <span class="cart-book-price cart-list">${price}</span>
        <div class="cart-quantity cart-list">
            <input class="cart-qinput" type="number" value="1">
            <button class="btn remove" type="button">X</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove')[0].addEventListener('click', removeCartBook)
    cartRow.getElementsByClassName('cart-qinput')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-books')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-book-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-book-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-qinput')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-price')[0].innerText = '$' + total
}

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