const form = document.querySelector(".form");
const mouvement1 = JSON.parse(localStorage.getItem("mouvement")) || [];
let tab=JSON.parse(localStorage.getItem("mouvement-guichitier")) || [];
const loadedTable = document.querySelector("#tab-content");
const tBody = document.querySelector("#test-table");
let mouvement={};
const genRow = (mouvement)=>{
    const row =`
  
  <tr >
  <tr>
  <td>50</td>
  <td><p>${mouvement["50"]}</p></td>
  <td><p>${Number(mouvement["50"])*50}</p></td>
  </tr>
  <tr>
  <td>20</td>
  <td><p>${mouvement["20"]}</p></td>
  <td><p>${Number(mouvement["20"])*20}</p></td>
  </tr>
  <tr>
  <td>10</td>
  <td><p>${mouvement["10"]}</p></td>
  <td><p>${Number(mouvement["10"])*10}</p></td>
  </tr>
  <tr>
  <td>5</td>
  <td><p>${mouvement["5"]}</p></td>
  <td><p>${Number(mouvement["5"])*5}</p></td>
  </tr>
  <tr>
  <td>5</td>
  <td><p>${mouvement["5"]}</p></td>
  <td><p>${Number(mouvement["5"])*5}</p></td>
  </tr>
  <tr>
  <td>2</td>
  <td><p>${mouvement["2"]}</p></td>
  <td><p>${Number(mouvement["2"])*2}</p></td>
  </tr>
  <tr>
  <td>1</td>
  <td><p>${mouvement["1"]}</p></td>
  <td><p>${Number(mouvement["1"])}</p></td>
  </tr>
  <tr>
  <td>0.500</td>
  <td><p>${mouvement["0.500"]}</p></td>
  <td><p>${Number(mouvement["0.500"])*20}</p></td>
  </tr>
  <tr>
  <td>0.200</td>
  <td><p>${mouvement["0.200"]}</p></td>
  <td><p>${Number(mouvement["0.200"])*0.2}</p></td>
  </tr>
  <tr>
  <td>0.100</td>
  <td><p>${mouvement["0.100"]}</p></td>
  <td><p>${Number(mouvement["0.100"])*0.1}</p></td>
  </tr>
  <tr>
  <td>0.050</td>
  <td><p>${mouvement["0.050"]}</p></td>
  <td><p>${Number(mouvement["0.050"])*0.05}</p></td>
  </tr>
  <tr>
  <td>0.020</td>
  <td><p>${mouvement["0.020"]}</p></td>
  <td><p>${Number(mouvement["0.020"])*0.02}</p></td>
  </tr>
  <tr>
  <td>0.010</td>
  <td><p>${mouvement["0.010"]}</p></td>
  <td><p>${Number(mouvement["0.010"])*0.01}</p></td>
  </tr>
  <tr>
  <td>0.005</td>
  <td><p>${mouvement["0.005"]}</p></td>
  <td><p>${Number(mouvement["0.005"])*0.005}</p></td>
  </tr>
  <tr>
  <td>Montant Total</td>
  <td><p>${mouvement.somme}</p></td>
  <td >

  <button  id="valid" class="btn btn-success " data-toggle="modal">valid</button>

  </td>
  </tr>


      
        
       
    </tr>
    `
    
    tBody.innerHTML += row
}
genRow(mouvement1)

  

const valid=document.getElementById("valid")
valid.addEventListener("click",(e)=>{
  tab.forEach(element => {
    if(element.id==mouvement1.id)
    {
  element.status="true"
    }
  });
localStorage.setItem("mouvement-guichitier", JSON.stringify(tab));
location.href="./receveur.html"
    
});
    
  
  