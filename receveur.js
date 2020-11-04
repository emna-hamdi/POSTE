const form = document.querySelector(".form");

const mouvement1 = JSON.parse(localStorage.getItem("mouvement-guichitier")) || [];
const loadedTable = document.querySelector("#tab-content");
const tBody = document.querySelector("#test-table");
let mouvement={};
const genRow = (mouvement)=>{
    const row =`
  
  <tr id=${mouvement.id} >
        <td>${mouvement.iduser}</td>
        <td>${mouvement.type}</td>
       <td >${mouvement.somme}</td>
        <td >${mouvement.cc} </td>
        <td >${mouvement.status} </td>
        

      
        
        <td >

        <button  id="buttonEdit" class="btn btn-success edite" >detailed</button>
  
        </td>
    </tr>
    `
    
    tBody.innerHTML += row
}
mouvement1.forEach(mouvement=>{
    genRow(mouvement)
})
const butt2=document.querySelectorAll("#buttonEdit");
const Detailmouvement=(e)=>{
    const Findmouvement=mouvement1.find((mouvement)=>mouvement.id==e.target.parentElement.parentElement.id);
return Findmouvement
}

butt2.forEach(button=>button.addEventListener("click",(e)=>{
    if(e.target.classList.contains("edite")){
  const mouvement=Detailmouvement(e);
  localStorage.setItem("mouvement", JSON.stringify(mouvement));
   location.href="./detaille.html"
  
    }
  }))
