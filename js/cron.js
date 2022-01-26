const btn_cron = document.querySelectorAll("button[data-btn]");
const time_area = Array.from(document.querySelectorAll("span[data-crono]"));
let cronometro;
let ct_con = 0, ct2_con = 0 , ct3_con = 0;

time_area.forEach((e)=> e.textContent = "00" );

function startCron(){

    btn_cron[0].dataset.cron = "inativo";
    btn_cron[1].dataset.cron = "";
    btn_cron[2].dataset.cron = "";
    btn_cron[3].dataset.cron = "";

    cronometro = setInterval(()=>{
        ct_con = ct_con + 1
        time_area[2].textContent = ct_con.toString().padStart(2, "0");

        if(ct_con == 60){
            ct_con = 0;
            time_area[2].textContent = ct_con.toString().padStart(2, "0");
            ct2_con = ct2_con + 1;
            time_area[1].textContent = ct2_con.toString().padStart(2, "0");
        }

        if(ct2_con == 60){
            ct_con = 0;
            time_area[2].textContent = ct_con.toString().padStart(2, "0");
            ct2_con = 0;
            time_area[1].textContent = ct_con.toString().padStart(2, "0");
            ct3_con = ct3_con + 1;
            time_area[0].textContent = ct3_con.toString().padStart(2, "0");
        }

        if(ct_con == 60 && ct2_con == 60 && ct3_con == 60){
            clearInterval(cronometro);
        };

    }, 1000);

    btn_cron[0].removeEventListener("click",()=>startCron());
};

function pauseCron(){
    btn_cron[0].dataset.cron = "";
    btn_cron[1].dataset.cron = "inativo";

    clearInterval(cronometro);

    btn_cron[1].removeEventListener("click",()=>stopCron());
}

function stopCron(){

    clearInterval(cronometro);

    ct_con = 0;
    ct2_con = 0;
    ct3_con = 0;

    time_area.forEach((e)=>e.textContent = "00");

    btn_cron[0].dataset.cron = "";
    btn_cron[1].dataset.cron = "inativo";
    btn_cron[2].dataset.cron = "inativo";
    btn_cron[3].dataset.cron = "inativo";

    btn_cron[2].removeEventListener("click",()=>stopCron());
}

const tabela = document.querySelector("div.tabela");
function marcarCron() {

    document.querySelector("div.marca").dataset.marca = "";

    addDivMarcador();
};

btn_cron[0].addEventListener("click",()=>startCron());
btn_cron[1].addEventListener("click",()=>pauseCron());
btn_cron[2].addEventListener("click",()=>stopCron());
btn_cron[3].addEventListener("click",()=>marcarCron());


function addDivMarcador(){
    let div_marcado = document.createElement("div");
    let div_posimar = document.createElement("div");
    let img_imgmar = document.createElement("img");
    let p_nummar = document.createElement("p");

    let div_timer = document.createElement("div");
    let p_tempmar = document.createElement("p");

    p_nummar.classList.add("num_mar");
    div_posimar.appendChild(p_nummar);

    img_imgmar.classList.add("img_mar");
    img_imgmar.src = "../src/icons/icone-de-bandeira.png";
    div_posimar.appendChild(img_imgmar);

    div_posimar.classList.add("posi_mar");
    div_marcado.appendChild(div_posimar);

    p_tempmar.classList.add("temp_mar");
    p_tempmar.textContent = `${time_area[0].textContent}:${time_area[1].textContent}:${time_area[2].textContent}`;
    div_timer.appendChild(p_tempmar);

    div_timer.classList.add("timer");
    div_marcado.appendChild(div_timer);

    div_marcado.classList.add("marcado");
    tabela.appendChild(div_marcado);

    p_nummar.textContent = Array.from(tabela.children).indexOf(div_marcado) + 1;
}