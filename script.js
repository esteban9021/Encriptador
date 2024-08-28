function encriptar() {
    let areaT = document.getElementById("Areatexto").value;
    let longitud = areaT.length;
    let texto = [];

    if(/[A-Z0-9]/.test(areaT)) { 
        alert('Por favor, ingrese solo letras minúsculas y sin números.'); 
        return; 
    }

    for (let i = 0; i < longitud; i++) {
        let caracter = areaT[i];
        switch (caracter) {
            case 'a':
                texto.push('ai');
                break;
            case 'e':
                texto.push('enter');
                break;
            case 'i':
                texto.push('imes');
                break;
            case 'o':
                texto.push('ober');
                break;
            case 'u':
                texto.push('ufat');
                break;
            default:
                texto.push(caracter);
        }
    }
    let textoEncriptado = texto.join('');
    asignarTextoElemento('p', textoEncriptado);
    limpiarcaja();
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let areaT = document.getElementById("Areatexto").value;
    let texto = areaT;
    
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    
    asignarTextoElemento('p', texto);
    limpiarcaja();
    mostrarResultado(texto);
}

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function limpiarcaja() {
    document.getElementById("Areatexto").value = "";
}

function copiar() {
    let texto = document.querySelector('p').textContent;

    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            alert('Error al copiar al portapapeles');
        });
}

function mostrarResultado(texto) {
    const resultadoElemento = document.getElementById('Parrafo');
    const contenedorMono = document.querySelector('.mono__desencriptado');
    const contenedorParrafo = document.querySelector('.texto__error');

    resultadoElemento.textContent = texto;

    if (texto) {
        contenedorMono.classList.add('oculto');
        contenedorParrafo.classList.add('oculto');
    } else {
        contenedorMono.classList.remove('oculto');
        contenedorParrafo.classList.remove('oculto');
    }
}
