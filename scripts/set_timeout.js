const paragraph = document.getElementById("paragraph");
const stop_button = document.getElementById("stop_button");

const timeout_result = setTimeout (()=> {
    paragraph.classList.add("grow_font");
},3000);

stop_button.addEventListener("click", ()=>{
    clearTimeout(timeout_result);
    console.log(paragraph.style);
});



