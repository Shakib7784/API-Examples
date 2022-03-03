const loadCountry = ()=>{

    fetch("https://restcountries.com/v3.1/all")
    .then(response=>response.json())
    .then(json=> showCountry(json))
}
loadCountry();
const showCountry = country=>{
    const getCountry = document.getElementById("countries");
    country.forEach(con=>{
        
        const div = document.createElement("div");
        div.classList.add("country")
        div.innerHTML= `
        <h3>${con.name.common}</h3>
        <p>${con.capital}</p>
        <button onclick = "loadC('${con.name.common}')">Details</button>
        
        `;
       /*  const h3 = document.createElement("h3");
        h3.innerText=con.name.common;
        div.appendChild(h3);
        const p = document.createElement("p");
        p.innerText=con.capital;
        div.appendChild(p); */
        getCountry.appendChild(div);

    })
}
const loadC= n =>{
    const url = `https://restcountries.com/v3.1/name/${n}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayCDetails(data[0]))
}

const displayCDetails= contr=>{
    console.log(contr);

    const countrydiv = document.getElementById("country_details");
    countrydiv.innerHTML = `
    <h3> ${contr.name.common}</h3>
    <p>population:${contr.population}</p>
    <img src="${contr.flag}">
    `;
}