function mostrarDatos() {

    let nombre = document.getElementById("nombre").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let tipoSangre = document.getElementById("tipoSangre").value;
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let sexo = document.getElementById("sexo").value;

    if (!nombre || !fechaNacimiento || !tipoSangre || !altura || !peso) {
        document.getElementById("resultado").textContent =
            "Completa todos los campos";
        return;
    }

    let nacimiento = new Date(fechaNacimiento);
    let hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }


    let alturaCm = altura * 2.54;
    let pesoLb = peso * 2.20462;

    let fondo = "";
    let generoTexto = "";

    if (sexo === "masculino") {
        fondo = "#cce7ff"; 
        generoTexto = "♂️ Masculino";
    } else if (sexo === "femenino") {
        fondo = "#ffd6e7"; 
        generoTexto = "♀️ Femenino";
    } else {
        fondo = "#ffe0b3"; 
        generoTexto = "Género no reconocido";
    }

    
    document.body.style.backgroundColor = fondo;

    document.getElementById("resultado").innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Genero:</strong> ${generoTexto}</p>
        <p><strong>Tipo de sangre:</strong> ${tipoSangre}</p>
        <p><strong>Altura:</strong> ${alturaCm.toFixed(2)} cm</p>
        <p><strong>Peso:</strong> ${pesoLb.toFixed(2)} lb</p>
        <p><strong>Edad:</strong> ${edad} años</p>`;
}
