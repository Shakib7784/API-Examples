
const searchFood = async()=>{

    const searchField = document.getElementById("search_field");
    const searchFieldValue = searchField.value;
    searchField.value="";
    if(searchFieldValue=='')
    {

    }
    else
    {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldValue}`;

        const dofetch = await fetch(url);
        const res = await dofetch.json();
        displaySearchReasult(res.meals);
      /* fetch(url)
      .then(Response=>Response.json())
      .then(json=>displaySearchReasult(json.meals)) */
    }
   
}

const displaySearchReasult = meals=>{
    const searchResult = document.getElementById("search_reasult");
    // searchResult.innerHTML='';
    searchResult.textContent='';

    if(meals.length==0)
    {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML =`
      <p>sorry!! no result found</p>
      `;
      searchResult.appendChild(div);
    }
    
     meals.forEach(meal=>{
        const div = document.createElement("div");
        div.classList.add("col")
           div.innerHTML = `
           <div onclick="loadmealDetails(${meal.idMeal})" class="card">
           <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
           </div>
           
           `;
           searchResult.appendChild(div);
       
     })
}
const loadmealDetails = async mealid =>
{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMEalDetails(data.meals[0]);
  /*   fetch(url)
    .then(Response=>Response.json())
    .then(data=>displayMEalDetails(data.meals[0])) */
}

const displayMEalDetails = m=>{
    console.log(m);
    const mealDetails = document.getElementById("meal_details");
    mealDetails.innerHTML='';
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML=`
    <img src="${m.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${m.strMeal}</h5>
      <p class="card-text">${m.strInstructions.slice(0,400)}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    `;
    mealDetails.appendChild(div);
}