let tab1=JSON.parse(localStorage.getItem("mouvement-guichitier")) || [];
const user= JSON.parse(localStorage.getItem("connectedUser")) 
const name =document.querySelector("#userconnecte")
let list = document.querySelector("#dates");
console.log(user.email);
console.log(name);
name.innerText=user.email.toString()
console.log(user.id)
tab=tab1.reverse()
for (let i=0; i<tab.length;i++){
    if(user.id==tab[i].iduser){
    let pr=`
    <tr>
    <td>${tab[i].cc}</td>
    <td>${tab[i].type}</td>
    <td>${tab[i].somme}</td>
    <td></td>
    </tr>
    `;
    
    console.log(pr)
    list.innerHTML+=pr
    
        // }
    }
        
        //  tab.forEach(Element => {
        //      tabmvm(tab[i])
        //      console.log(tabmvm(tab[i]))
        //  });
    

}
