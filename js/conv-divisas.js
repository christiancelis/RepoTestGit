


addEventListener()

// UTILIZANDO ASYNC AWAIT
async function converMonedas() {
    const url = `https://cdn.dinero.today/api/latest.json`;

    const respuesta = await fetch(url);

    //si la respuesta no fue exitosa
    if (!respuesta.ok)
        throw new Error("Error. No se pudo hacer la conversión")

    const json = await respuesta.json();
    // retornar el valor de pesos
    let eur = json.rates.EUR;
    let cad = json.rates.CAD;
    let mxn = json.rates.MXN;
    let cop = json.rates.COP;

    return [eur, cad, mxn, cop];
}

async function conversion() {
    try {
        let listaMonedas = await converMonedas();
        let euro = listaMonedas[0]
        let cad = listaMonedas[1]
        let mxn = listaMonedas[2]
        let cop = listaMonedas[3]

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