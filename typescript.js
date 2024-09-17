// reference area
var resumeform = document.getElementById("resume");
var resumeDisplayElement = document.getElementById("resume-display");
// form submission
resumeform.addEventListener("submit", function (Event) {
    Event.preventDefault();
    // collect info
    var name = document.getElementById("name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    // generate resume 
    var resumehtml = " \n    <h2> <b> Editable Resume</b></></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span cotenteditable = \"true\">".concat(name, "</span></p>\n     \n    <p><b>Email:</b><span cotenteditable = \"true\">").concat(email, "</span></p>\n     \n    <p><b>phone:</b><span cotenteditable = \"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n\n    <p cotenteditable = \"true\" >").concat(education, "</P>\n\n     <h3>Experience</h3>\n\n    <p cotenteditable = \"true\">").concat(experience, "</p>\n\n      <h3>skills</h3>\n\n      <p cotenteditable = \"true\">").concat(skills, "</p>\n    \n    ");
    // genrated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error("you have to fill this element must");
    }
});
