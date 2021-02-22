const calcular = () => {
    let litros = document.querySelector(".nafta").value;
    if(litros === ""){
        document.querySelector(".result").innerHTML = "Por favor ingrese un numero"
    }else{
    let n = parseInt(litros);
    let mult = 2 * n;
    let re = mult / 100;
    document.querySelector(".result").innerHTML = `Hay que utilizar ${re} cc para una mezcla perfecta`
    }
}

