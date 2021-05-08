class TabElement extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return ['text']
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case 'text':
                this.text = newValue
                break
        }
    }

    connectedCallback() {
        var id = this.text.replace(/ /g, "").toLowerCase()
        this.innerHTML = `
            <a href="#" id=${id}Tab class="switchButtons__link">
                ${this.text}
            </a>`

        this.addEventListener('click', function(event) {
            this.getElementsByTagName('a')[0].classList.add('switchButtons__link--active')
        })
    }
}
customElements.define('tab-element', TabElement)