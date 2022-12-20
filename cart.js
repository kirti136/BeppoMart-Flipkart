const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active");
})

document.querySelectorAll("#close").forEach((n) => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


//products added
let cartProducts = document.getElementById("cart-container");
let cartData = JSON.parse(localStorage.getItem("cart-data"));

if (cartData === null) {
    cartData = [];
}
showData(cartData);

function showData(data) {
    data.forEach((element, index) => {
        let card = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", element.image);

        let name = document.createElement("p");
        name.innerText = element.name;

        let discountPrice = document.createElement("p");
        discountPrice.innerText ="₹" + element.discountPrice;

        let originalPrice = document.createElement("s");
        originalPrice.innerText = "₹" + element.originalPrice;

        let Delete = document.createElement("button");
        Delete.innerText = "Delete";

        Delete.addEventListener("click",()=>{
            cartProducts.innerHTML = null;
            cartData.splice(index,1);
            localStorage.setItem("cart-data",JSON.stringify(cartData));
            showData(cartData)
            // alert("Item deleted");
        })

        card.append(image, name, discountPrice, originalPrice, Delete);
        cartProducts.append(card);
    })
}
// showData(cartData);