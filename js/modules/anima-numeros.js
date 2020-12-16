export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    // Bind do this do objeto ao callback da mutação
    this.handleMudation = this.handleMudation.bind(this);
  }

  // Recebe um elemento do dom, com número em seu texto do
  // incrementa a partir de 0 até o número final
  static incrementarNumero(num) {
    const total = +num.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      num.innerText = start;
      if (start > total) {
        num.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementar número para cadast
  // número selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero),
    );
  }

  // Função que ocorre quando a mutação ocorrer
  handleMudation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar
  // quanto a classe ativo é adicionada no elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMudation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerClass) this.addMutationObserver();
    return this;
  }
}
