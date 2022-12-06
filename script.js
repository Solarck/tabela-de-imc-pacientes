let titulo = document.querySelector('#titulo')
	console.log(titulo.textContent)
	titulo.textContent = 'Aparecida Nutricionista'

    let paciente = document.querySelector('#primeiro-paciente')
    let tdpeso = paciente.querySelector('.info-peso')
    let peso = tdpeso.textContent
    let pesovalido = true

    let tdaltura = paciente.querySelector('.info-altura')
    let altura = tdaltura.textContent
    let alturavalida = true

    let infoimc = paciente.querySelector('.info-imc')

    if(peso < 0 || peso > 1000){
        console.log('Peso invalido')
        pesovalido  = false
        infoimc.textContent = 'Peso invalido'
    }

    if(altura < 0 || altura > 3.00){
        console.log('Altura invalida')
        alturavalida = false
        infoimc.textContent = 'Altura invalida'
    }

    if(pesovalido && alturavalida ){
        let imc = peso / ( altura * altura )
        infoimc.textContent = imc
    }

