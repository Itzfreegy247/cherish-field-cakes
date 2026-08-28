const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const cakeCards = document.querySelectorAll(".cake-card");

if (categoryFilter && searchInput) {

    function filterCakes() {

        const selected = categoryFilter.value.toLowerCase();
        const search = searchInput.value.toLowerCase();

        cakeCards.forEach(card => {

            const category = card.dataset.category.toLowerCase();

            const title = card.querySelector(".details-btn")
                .dataset.title.toLowerCase();

            const matchesCategory =
                selected === "all" || category === selected;

            const matchesSearch =
                title.includes(search);

            if (matchesCategory && matchesSearch) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    }

    categoryFilter.addEventListener("change", filterCakes);
    searchInput.addEventListener("keyup", filterCakes);

}



categoryFilter.addEventListener("change", filterCakes);

searchInput.addEventListener("keyup", filterCakes);


const detailsButtons = document.querySelectorAll(".details-btn");

const modal = document.getElementById("cakeModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalRating = document.getElementById("modalRating");

const modalPrice = document.getElementById("modalPrice");

const modalDescription = document.getElementById("modalDescription");

const closeButton = document.querySelector(".close");




detailsButtons.forEach(function(button){

    button.addEventListener("click", function(event){

        event.preventDefault();

        modal.style.display = "flex";

    modalTitle.textContent = button.dataset.title;

    modalPrice.textContent = button.dataset.price;

    modalRating.textContent = button.dataset.rating;

    modalDescription.textContent = button.dataset.description;

    modalImage.src = button.dataset.image;


    });

});


closeButton.addEventListener("click",function(){
    modal.style.display = "none";
    
})

window.addEventListener("click" , function(event){

    if (event.target === modal){

        modal.style.display = "none";   

    }
})
