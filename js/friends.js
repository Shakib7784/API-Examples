const loadfriends = ()=>{

    fetch("https://randomuser.me/api/?results=10")
    .then(response=>response.json())
    .then(data=>showfriends(data))
}
loadfriends();
const showfriends = friend =>{
    console.log(friend);
        const store = document.getElementById("friends")
    for(const f of friend.results)
    {
       const p = document.createElement("p");
       p.innerText= `
       Name: ${f.name.title}  ${f.name.firs}  ${f.name.last}
       Email: ${f.email}
       `;
       store.appendChild(p);
    }
}