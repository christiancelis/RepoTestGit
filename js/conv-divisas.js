
const sl = document.querySelectorAll("select");

sl.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        agregarValoresalSelect(e)
        e.preventDefault();
        conversion(e)
        e.stopPropagation();
    });
});


async function getDivisa(){

    url = "https://cdn.dinero.today/api/ecb.json"

    const respuesta = await fetch(url);

    if(!respuesta.ok){
   throw new Error("Error, obtener divisa");
    }
    const json = await respuesta.json()

    return(json)
}



async function conversion(e) {
    try {
        let vDivisas = await getDivisa();

        NombresDivisas = ["EUR","CAD","MXN","COP"]
        agregarValoresalSelect(NombresDivisas,e)
        
    } catch (error) {
        console.error(error.message);
    }

    }


function agregarValoresalSelect(e){
        const sl = document.querySelector("#");
        NombresDivisas = ["EUR","CAD","MXN","COP"]
        while(e.target.firstChild){
            e.target.removeChild(e.target.lastChild)
        }
        let select = document.createElement("option")
        select.setAttribute("value","none")
        select.textContent = "Seleccione una moneda"
        e.target.appendChild(select)
    listamonedas.forEach(element => {
        console.log(element)
        opt = document.createElement("option")
        opt.setAttribute("value",element)
        opt.textContent = element
        e.target.appendChild(opt)
    });
    
}


async function divisa(){
    try {
        const vDivisas = await getDivisa()
        valorbase = vDivisas.rates.EUR
        let inputeuros = document.getElementById("veuros")
        let inputdolar = document.getElementById("vdolar")
        let euros = inputeuros.value

        let dolares = euros / valorbase

        inputdolar.value = dolares.toFixed(3)
        
    } catch (error) {
        console.log(error.message)
    }
  

}




       


