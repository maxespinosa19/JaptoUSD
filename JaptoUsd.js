const form = document.querySelector('form');
form.addEventListener("submit" , YenToDol)

function YenToDol(event){
    event.preventDefault();
    const Yen = Number(event.target.Yen.value)
    const Doll= Yen * 139.34;

    document.querySelector('h2').innerText = "¥ " + Yen.toLocaleString(2) + " is " + "$" + Doll.toLocaleString(2) 
}
