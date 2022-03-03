

const loadComment = ()=>{

    const url ="https://jsonplaceholder.typicode.com/comments";
    fetch (url)
    .then(Response=>Response.json())
    .then(json=>showcomment(json))
}
// loadComment();
const showcomment = com=>{
    const show = document.getElementById("showcomment");
    com.forEach(c=>{
        const div = document.createElement("div");
        div.classList.add("newdiv");
        div.innerHTML=`
        <h3>Name : ${c.name}</h3>
        <p><b>email</b> : ${c.email}</p>
        <small><b>body</b> :${c.body}</small>
        `;
        show.appendChild(div);
    })
}



