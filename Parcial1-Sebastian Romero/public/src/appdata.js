import * as components from "./components/export.js";
import planesTuristicos from "./components/data.js"

class appData extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }

    render(){
        planesTuristicos.forEach((p) => {
            this.shadowRoot.innerHTML += `
            <my-travel destino="${p.destino}" dias="${p.duracionEnDias}" costo="${p.costo}" desc="${p.descripcion}" activi="${p. actividades}"></my-travel>
            `
        })
    }
}
customElements.define("app-data",appData)