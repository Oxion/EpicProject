document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

function onDOMContentLoaded() {
    var backgroundChangeBtnNode = document.getElementById("background-change-btn");

    backgroundChangeBtnNode.addEventListener("click", function(event) {
        document.body.style.backgroundColor = "purple";
        
        document.body.innerHTML = "";

        var awesomeNode = document.createElement("div");
        awesomeNode.className = "electron-is-awesome";
        awesomeNode.innerHTML = "Electron is Awesome";

        document.body.appendChild(awesomeNode);
    });
}
