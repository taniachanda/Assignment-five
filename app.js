const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function () {
    const searchMeals = document.getElementById("input-meals").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}`)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("meal-container").innerHTML = "";
            document.getElementById("menuDetail").innerHTML = " ";
            const displayMeals = document.getElementById("meal-container");
            data.meals.forEach((item) => {
                const singleItems = document.createElement("div");
                singleItems.className = "card";
                singleItems.innerHTML = `
            <img src="${item.strMealThumb}" onClick="displayMealDetails(${item.idMeal})">
            <h3 class="card-title" onClick="displayMealDetails(${item.idMeal})" >${item.strMeal}</h3>
            `;
                displayMeals.appendChild(singleItems);
            });
        });       
});


const displayMealDetails = (searchDetails) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchDetails}`)
        .then((res) => res.json())
        .then((data) => {
            const displayMealDetails = document.getElementById("menuDetail");
            document.getElementById("menuDetail").innerHTML = " ";
            document.getElementById("menuDetail").style.display = "block";
            const ingredientList = document.createElement("div");
            ingredientList.className = "meal-details";
            ingredientList.innerHTML = `
              <img src="${data.meals[0].strMealThumb}" alt="Food Item"/>
              <h3>${data.meals[0].strMeal}</h3>
             <ul>
             <li>${data.meals[0].strIngredient1}</li>
             <li>${data.meals[0].strIngredient2}</li>
             <li>${data.meals[0].strIngredient3}</li>
             <li>${data.meals[0].strIngredient4}</li>
             <li>${data.meals[0].strIngredient5}</li>
             <li>${data.meals[0].strIngredient6}</li>
             <li>${data.meals[0].strIngredient7}</li>
             <li>${data.meals[0].strIngredient8}</li>
             <li>${data.meals[0].strIngredient9}</li>
             <li>${data.meals[0].strIngredient10}</li>
            </ul>

              `;
              displayMealDetails.appendChild(ingredientList);
        });
};

