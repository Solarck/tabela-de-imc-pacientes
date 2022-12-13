let titulo = document.querySelector('#titulo')
console.log(titulo.textContent)
titulo.textContent = 'Aparecida Nutricionista'

let pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    let tdpeso = paciente.querySelector('.info-peso')
    let peso = tdpeso.textContent
    let pesovalido = true

    let tdaltura = paciente.querySelector('.info-altura')
    let altura = tdaltura.textContent
    let alturavalida = true

    let infoimc = paciente.querySelector('.info-imc')

    if (peso < 0 || peso > 1000) {
        console.log('Peso invalido')
        pesovalido = false
        infoimc.textContent = 'Peso invalido'
        paciente.classList.add("paciente-invalido")
    }

    if (altura < 0 || altura > 3.00) {
        console.log('Altura invalida')
        alturavalida = false
        infoimc.textContent = 'Altura invalida'
        paciente.classList.add("paciente-invalido");
    }

    if (pesovalido && alturavalida) {
        let imc = CalculaImc(peso,altura)
        infoimc.textContent = imc
    }

}

function CalculaImc(peso,altura){
    let imc = 0 
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}