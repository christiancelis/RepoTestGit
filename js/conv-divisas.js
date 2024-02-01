
const selected = document.getElementById("div-orig");

selected.addEventListener("click",(e)=>{
    e.preventDefault();
    conversion(e);
    e.stopPropagation();
})



// UTILIZANDO ASYNC AWAIT
async function converMonedas() {
    const url = `https://cdn.dinero.today/api/latest.json`;

    const respuesta = await fetch(url);

    
    //si la respuesta no fue exitosa
    if (!respuesta.ok){
        throw new Error("Error. No se pudo hacer la conversión")
        return false
    }else{
        const json = await respuesta.json();
        return json 
    }
       

    
    
    // retornar el valor de pesos
    
}

async function conversion(e) {
    try {
        let listaMonedas = await converMonedas();
        
        agregarValoresalSelect(listaMonedas, e)


        let euroValor = document.getElementById('inpEuro').value;
        
        let dolar = 1

        resultadoDol = euroValor / euro
        resultadoCAD = euroValor * cad / euro
        resultadoMXN = euroValor * mxn / euro
        resultadoCOP = euroValor * cop / euro

        document.getElementById("inpDolar").value = Number(resultadoDol.toFixed(2));
        document.getElementById("inpDolCan").value = Number(resultadoCAD.toFixed(2));
        document.getElementById("inpPesMex").value = Number(resultadoMXN.toFixed(2));
        document.getElementById("inpPesCol").value = Number(resultadoCOP.toFixed(2));

    } catch (error) {
        console.error(error.message);
    }
    }

function agregarValoresalSelect(listamonedas,e){

    listamonedas.forEach(element => {
        console.log(element.rates)
        elementoselec = document.createElement("option")
        elementoselec.setAttribute("value",element.rates)
    });
    
}






       


        async function getDivisa(){

            url = "https://cdn.dinero.today/api/ecb.json"

            const respuesta = await fetch(url);

            if(!respuesta.ok){
           throw new Error("Error, obtener divisa");
            }
            const json = await respuesta.json()

            return(json)

        }


    let btnc = document.getElementById("btc")
    btnc.addEventListener("click",(e)=>{
        e.preventDefault()
        divisa()
    })

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

    </script>
    
</body>
</html>