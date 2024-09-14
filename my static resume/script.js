var button = document.getElementById("button");
var skillsec = document.getElementById("skills");
button.addEventListener("click", function () {
    if (skillsec.style.display === "none") {
        skillsec.style.display = "block";
    }
    else {
        skillsec.style.display = "none";
    }
});
