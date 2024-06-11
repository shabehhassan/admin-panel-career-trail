
var icon = document.getElementById("light")
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="light.png";
    }
    else{
        icon.src="dark.png";
    }
}