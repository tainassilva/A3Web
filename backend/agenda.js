// Selecionar os elementos relevantes
const servicos = document.querySelectorAll('input[name="serviço"]');
const profissionais = document.querySelectorAll('input[name="profissional"]');
const inputData = document.getElementById('data');
const inputHorario = document.getElementById('horario');
const selectedServico = document.getElementById('selected-serviço');
const selectedProfissional = document.getElementById('selected-profissional');
const selectedData = document.getElementById('selected-data');
const selectedHorario = document.getElementById('selected-horario');
const btnAgendar = document.getElementById('btn-agendar');
const mensagemConfirmacao = document.getElementById('mensagem-confirmacao');

// Variáveis para armazenar as seleções
let servicoSelecionado = '';
let profissionalSelecionado = '';
let dataSelecionada = '';
let horarioSelecionado = '';

// Função para atualizar os itens selecionados
function atualizarItensSelecionados() {
  selectedServico.textContent = servicoSelecionado;
  selectedProfissional.textContent = profissionalSelecionado;
  selectedData.textContent = formatarData(dataSelecionada);
  selectedHorario.textContent = horarioSelecionado;

  // Verificar se todos os campos estão preenchidos
  if (
    servicoSelecionado !== '' &&
    profissionalSelecionado !== '' &&
    dataSelecionada !== '' &&
    horarioSelecionado !== ''
  ) {
    btnAgendar.disabled = false; // Habilitar o botão "Agendar"
  } else {
    btnAgendar.disabled = true; // Desabilitar o botão "Agendar"
  }
}

// Ouvintes de eventos para os checkboxes dos serviços
servicos.forEach((servico) => {
  servico.addEventListener('change', () => {
    if (servico.checked) {
      servicoSelecionado = servico.parentElement.querySelector('.serviço-info h4').textContent;
    } else {
      servicoSelecionado = '';
    }
    atualizarItensSelecionados();
  });
});

// Ouvintes de eventos para os radio buttons dos profissionais
profissionais.forEach((profissional) => {
  profissional.addEventListener('change', () => {
    if (profissional.checked) {
      profissionalSelecionado = profissional.parentElement.querySelector('h4').textContent;
      atualizarItensSelecionados();
    }
  });
});

// Ouvinte de eventos para o campo de data
inputData.addEventListener('change', () => {
  dataSelecionada = inputData.value;
  atualizarItensSelecionados();
});

// Ouvinte de eventos para o campo de horário
inputHorario.addEventListener('change', () => {
  horarioSelecionado = inputHorario.value;
  atualizarItensSelecionados();
});

// Função para formatar a data no formato brasileiro (dd/mm/aaaa)
function formatarData(data) {
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}

// Ouvinte de eventos para o botão "Agendar"
btnAgendar.addEventListener('click', () => {
  // Exibir mensagem de confirmação
  mensagemConfirmacao.textContent = 'Agendamento confirmado!';
});
