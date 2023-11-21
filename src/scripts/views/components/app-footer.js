class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
                .footer {
                    background-color: #0F2C59;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    max-width: 100%;
                    bottom: 0;
                }
            </style>
            <div class="footer">
                <p tabindex="0">&copy; ${new Date().getFullYear()} - KataRes App</p>
            </div>
        `;
  }
}

customElements.define('app-footer', Footer);
