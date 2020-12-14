export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const isDayOpen = diasSemana.includes(diaAgora);
  const isHourOpen = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (isDayOpen && isHourOpen) {
    funcionamento.classList.add('aberto');
  }
}
