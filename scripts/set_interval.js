const paragraph = document.getElementById("paragraph");
const stop_button = document.getElementById("stop_button");

const interval_result = setInterval(()=> {
    paragraph.classList.toggle("grow_font");
},3000);

stop_button.addEventListener("click", ()=>{
    clearTimeout(interval_result);
    console.log(paragraph.style);
});
