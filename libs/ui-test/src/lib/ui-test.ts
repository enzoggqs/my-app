export class GreetingElement extends HTMLElement {
  public static observedAttributes = ['title'];

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .welcome-box {
          width: 400px;
          height: 400px;
          background-color: black;
          display: flex;
          color: white;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      </style>
      <div class="welcome-box">
        <h1>Bem-vindo${this.title ? ` a ${this.title}` : ''}!</h1>
      </div>
    `;
  }
}

customElements.define('happynrwl-greeting', GreetingElement);
