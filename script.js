const btn = document.querySelectorAll("button");

const card = document.querySelectorAll(".img-card");

const filterCards = ({target}) =>{
    document.querySelector(".active").classList.remove("active");
    target.classList.add("active");
    console.log(target);

    card.forEach((card)=>{
    card.classList.add("hide");
    if(card.dataset.name === target.dataset.name || target.dataset.name === "all"){
        card.classList.remove("hide");
    }
})
}

btn.forEach((btn)=>{
    btn.addEventListener("click", filterCards);
})


