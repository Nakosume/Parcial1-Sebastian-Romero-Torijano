class button extends HTMLElement{
    
    static get observedAttributes(){
        return ["reserve"]
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    connectedCallback() {
        this.mount();
    }
    
    dissconnectedCallback() {
       this.removeEventListeners();
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName]=newValue;
        this.render();
    }

    mount() {
        this.render();
        this.addEventListeners();
    }
    
    addEventListeners() {
        this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.onButtonClicked);
    }

    removeEventListeners() {
        this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.onButtonClicked);
    }

    onButtonClicked() {
        console.log("clicked")
        if(this.reserve="No"){
            this.setAttribute("reserve","Si")
        }else{
            this.setAttribute("reserve","No")
        }
        
        this.mount();
    }

    render(){
        this.shadowRoot.innerHTML = `
          <section>
            <h2>Reservado:</h2>
            <p>${this.reserve || "No"}</p>
            <button> Hacer/Cancelar Reserva </button>
          </section>
      `;
    }
}
customElements.define("my-button",button)
export default button