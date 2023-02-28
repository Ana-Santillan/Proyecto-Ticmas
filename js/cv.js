document.getElementById('boton').addEventListener('click', function () {
    document.getElementById("demo").innerHTML = "Soy estudiante de 5to año de la carrera Ingeniería en Sistemas de Información. Busco una empresa en donde pueda desarrollar mis conocimientos obtenidos a lo largo de estos años y adquirir experiencia profesional. Soy una persona versátil, organizada, con gran iniciativa y con cualidades en la gestión de proyectos.";
    var demo = document.getElementById("demo");
    demo.classList.toggle('showinfo');
    console.log(this.innerText);
    if (this.innerText == "Ver más") {
        this.innerText = "Ver menos";
    }
    else {
        this.innerText = "Ver más"
    }
});

function printPage() {
    window.print();
}

var boton = document.getElementById("download");
var contador = 15;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = "<b> 15 segundos para descargar.</b>"
var id;

boton.parentNode.replaceChild(etiqueta, boton);

function descarga() {
    this.style.display = "none";
    id = window.setInterval(function () {
        contador--;
        if (contador < 0) {
            etiqueta.parentNode.removeChild(boton, etiqueta);
            window.clearInterval(id);
        }
        else {
            etiqueta.innerHTML = + contador.toString() + "<b> segundos para descargar.</b>";
        }
    }, 1000)
};

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;

// Area cv
let areaCv = document.getElementById("area-cv");

let resumeButton = document.getElementById("resume-button");

let opt = {
    margin: 0,
    filename: 'Cv-Ana-Santillan.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
};

function generateResume() {
    html2pdf(areaCv, opt)
}
generateResume()

// resumeButton.addEventListener("click", () =>{
//     generateResume();
//     setTimeout(10000)
// })