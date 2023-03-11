class travel extends HTMLElement{
    static get observedAttributes(){
        return ['destino','dias','costo','desc','activi']
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName]=newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./src/components/travel/travel.css">
            <div class="card">
            <h2>Destino: ${this.destino}</h2>
            <p>Duracion: ${this.dias}</p>
            <p>Costo: ${this.costo}</p>
            <p>Descripcion: ${this.desc}</p>
            <p>Actividades: ${this.activi}</p>
            <my-button></my-button>
            <div>
        `;
    }
}
customElements.define("my-travel",travel)
export default travel