// reference area
const resumeform = document.getElementById("resume") as HTMLFormElement;
 const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
 
// form submission

 resumeform.addEventListener("submit",(Event:Event)=>{
    Event.preventDefault();

    // collect info
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("Email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("Education") as HTMLInputElement).value
    const experience = (document.getElementById("Experience") as HTMLInputElement).value
    const skills = (document.getElementById("Skills") as HTMLInputElement).value

    // generate resume 
    const resumehtml =` 
    <h2> <b> Editable Resume</b></></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span cotenteditable = "true">${name}</span></p>
     
    <p><b>Email:</b><span cotenteditable = "true">${email}</span></p>
     
    <p><b>phone:</b><span cotenteditable = "true">${phone}</span></p>

    <h3>Education</h3>

    <p cotenteditable = "true" >${education}</P>

     <h3>Experience</h3>

    <p cotenteditable = "true">${experience}</p>

      <h3>skills</h3>

      <p cotenteditable = "true">${skills}</p>
    
    `;

    // genrated resume
    if(resumeDisplayElement){
resumeDisplayElement.innerHTML = resumehtml;
    }else {
        console.error("you have to fill this element must");
    }
});