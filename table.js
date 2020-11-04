const montant =document.querySelectorAll(".montant")
const abs =document.querySelector(".abs")
const valeurs =document.querySelectorAll(".inputs")
const resultat =document.querySelectorAll(".somme")
const total =document.querySelector("#total")

const typem =document.querySelector("#type-mvm")
const date =document.getElementById('date')
let tab=JSON.parse(localStorage.getItem("mouvement-guichitier")) || [];
const user= JSON.parse(localStorage.getItem("connectedUser")) 
let totalv=0;

let mguichet=[]
var d= new Date();
date.innerText=d.getUTCDate()+"-"+Number(d.getUTCMonth()+1)+'-'+d.getFullYear()+'/'+d.getHours()+':'+d.getMinutes()
let formulaire={}
let formulaire1={}
console.log(formulaire)
for (let i=0; i<montant.length;i++){

        formulaire[montant[i].textContent]=0;

        valeurs[i].addEventListener('keyup', function(){
                let mon=montant[i].textContent;
                // console.log(mon)
                // console.log(valeur[i].value)
        let rip= valeurs[i].value*mon;
        resultat[i].innerText=rip;
        
        formulaire[montant[i].textContent]=Number(valeurs[i].value);
        
        totalv=0;
        for(let j=0; j<montant.length;j++){
        let f=resultat[j].innerText
        totalv+=Number(f)
        
 }
        
        total.innerText=totalv
        formulaire["somme"]=Number(total.innerText)
        
        formulaire["cc"]=date.innerText
        console.log(formulaire)
        
        
        
        
}) 


}
abs.addEventListener('click', (e) => {
        





        formulaire['type']=typem.textContent
        formulaire['iduser']=user.id
        formulaire['status']="false"   
         formulaire['id']=Math.floor(Math.random()*1000)
         tab.push(formulaire)
        localStorage.setItem("mouvement-guichitier", JSON.stringify(tab));
        location.href="guichitier.html"

})


        





