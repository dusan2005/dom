//ispise dokument kao objekat u konzolu
//console.dir(document)
//ispise domen dokumenta
//console.log(document.domain);
//ispise ime sajta
//console.log(document.title);
//promeni ime sajta
document.title = "moj prvi sajt";

//ispise sve html elemente
//console.log(document.all)

console.log(document.forms[0]);

let items = document.getElementById("items");
//console.log(items)
let listItems=document.getElementsByClassName("list-item");
console.log(listItems)

//listItems[2].textContent = "nesto"

for(let i=0; i<listItems.length; i++){
    if(i%2==0)
    {
        listItems[i].style.backgroundColor="grey"
    }
}