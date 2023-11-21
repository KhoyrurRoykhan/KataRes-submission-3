class HeroBar extends HTMLElement {
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
        .jumbotron {
            background-image: url('./heros/hero-image_1-large.jpg');
            background-size: cover;
            background-position: center;
            color: #fff;
            text-align: center;
            padding: 100px;
            box-sizing: border-box;
            margin-top: 0;
          }

          .jumbotron h1 {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
          
          .jumbotron p {
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          }
        
          
          @media (min-width: 1200px) {
            .jumbotron {
              width: 1000px;
              margin: 0 auto;
            }
          }
          
          @media (max-width: 1199px) {
            .jumbotron {
              width: 100%;
            }
          }
          
          @media (max-width: 600px) {
            .jumbotron {
              background-image: url('./heros/hero-image_1-small.jpg');
            }
          }
        </style>
  
        <div class="jumbotron">
            <h1>Welcome to the KataRes Website</h1>
            <p>Come on, find a list of restaurants you want to visit</p>
        </div>
      `;
  }
}

customElements.define('hero-bar', HeroBar);
