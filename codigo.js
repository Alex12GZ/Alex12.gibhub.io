let nom = prompt("Ingrese su nombre");
let ed = Number(prompt("Ingrese su edad"));
let gen = prompt("Ingrese su genero (Masculino o Femenino)");
    gen = gen.toLowerCase().trim()
let mes = ed * 12

document.write("-----------------------------------------------------<br>");
document.write("<br>");
document.write("Bienvenido usuario " + nom + "<br>");
document.write("<br>");
document.write("-----------------------------------------------------<br>");
document.write("<br>");
document.write("Su edad actual en meses es: " + mes + "<br>");
document.write("<br>");
document.write("-----------------------------------------------------<br>");
document.write("<br>");
if (gen === "masculino") {
document.write("Usted es hombre <br>");
document.write('<img src="imagen-masculino.png" alt="Genero masculino" width="150"><br>');
} else if (gen === "femenino") {
document.write("Usted es mujer  <br>")
document.write('<img src="imagen-femenino.png" alt="Genero femenino" width="150"><br>');
 document.body.style.backgroundColor = "#f8bbd0"; 
}
else {
document.write("Genero no reconocido") 
document.body.style.backgroundColor = "#f7b054ff"
}