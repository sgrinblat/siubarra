const SWITCH_BOTON = document.querySelector("#switch");

SWITCH_BOTON.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    SWITCH_BOTON.classList.toggle("active");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
});

if(localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    SWITCH_BOTON.classList.add("active");
} else {
    document.body.classList.remove("dark");
    SWITCH_BOTON.classList.remove("active");
}