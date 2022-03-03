
document.getElementById("errorp").style.display="none";

const searchFood = ()=>{
  document.getElementById("errorp").style.display="none";

    const searchField = document.getElementById("search_field");
    const searchFieldValue = searchField.value;
    searchField.value="";
    // if search field value is empty. if we click search buttion without entring nothing that time it will provide us error
    if(searchFieldValue=='')
    {
      document.getElementById("errorp").style.display="block";
    }
    else
    {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldValue}`;
      fetch(url)
      .then(Response=>Response.json())
      .then(json=>displaySearchReasult(json.meals))
      .catch(error=>displayError(error));
    }
}

const displayError = e=>{
  document.getElementById("errorp").style.display="block";

// we can show error mcg directly thorough below code
/* const displayError = e=>{
          const displayerror = document.getElementById("error");
          const p=document.createElement("p");
          p.innerHTML = `sorry!! ${e}`;
          displayerror.appendChild(p)
}
 */
const displaySearchReasult = meals=>{
    const searchResult = document.getElementById("search_reasult");
    // it will clear previous result
    searchResult.innerHTML='';
    // searchResult.textContent='';
    if(meals.length==0)
    {
      document.getElementById("errorp").style.display="block";
    }
     meals.forEach(meal=>{
        const div = document.createElement("div");
        div.classList.add("col")  
        //  we have taken meal id insdile div through a buttuon
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
const loadmealDetails = mealid =>
{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>displayMEalDetails(data.meals[0]))
}

//display single meal details using meal id
const displayMEalDetails = m=>{
    console.log(m);
    const mealDetails = document.getElementById("meal_details");
    // we are removing previous result here
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