const link_hover = document.querySelectorAll(".link_hover");
const legend = document.querySelectorAll(".hv_app");

function showLegend(num){
    legend[num].dataset.app = "hover";
};

function hideLegend(num){
    legend[num].dataset.app = "";
};

link_hover.forEach((e , q, i)=>{
    e.addEventListener("mouseenter", ()=> showLegend(q));
    e.addEventListener("mouseleave", ()=> hideLegend(q));
});