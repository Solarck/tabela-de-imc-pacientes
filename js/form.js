
let botao = document.querySelector('#adicionar-paciente')
botao.addEventListener('click', function () {
    event.preventDefault()

    let form = document.querySelector('#form-adiciona')
    let paciente = ObtemPacienteForm(form)

    let pacienteTR = MontaTr(paciente)
    console.log(paciente)

    // Adicionando paciente na tabela
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTR)

    form.reset()
}
)

// Criando objeto
function ObtemPacienteForm(form) {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: CalculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

// Criando Tr/Td
function MontaTr(paciente) {
    let pacienteTR = document.createElement('tr')
    pacienteTR.classList.add('paciente')

    let nomeTd = montaTd(paciente.nome, 'info-nome')
    let alturaTd = montaTd(paciente.altura, 'info-altura')
    let pesoTd = montaTd(paciente.peso, 'info-peso')
    let gorduraTd = montaTd(paciente.gordura, 'info-gordura')
    let imcTd = montaTd(paciente.imc, 'info-imc')

    pacienteTR.appendChild(nomeTd)
    pacienteTR.appendChild(alturaTd)
    pacienteTR.appendChild(pesoTd)
    pacienteTR.appendChild(gorduraTd)
    pacienteTR.appendChild(imcTd)

    return pacienteTR
}

function montaTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}
