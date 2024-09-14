const button = document.getElementById("button") as HTMLButtonElement
const skillsec = document.getElementById("skills") as HTMLElement

button.addEventListener("click",()=>{
if(skillsec.style.display === "none"){
    skillsec.style.display= "block"
}else{
skillsec.style.display= "none"
}
});