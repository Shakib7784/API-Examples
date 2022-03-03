const loadquotes = ()=> {
    fetch("https://api.kanye.rest/")
    .then(Response=>Response.json())
    .then(json=>displayQuote(json))
}
const displayQuote = getquotes => {
  
  const quoteid = document.getElementById("quote");
  quoteid.innerText=getquotes.quote;

}