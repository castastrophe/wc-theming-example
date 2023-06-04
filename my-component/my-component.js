import { html, render } from "lit";

export default class MyComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    render(this.template, template);

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.url = this.getAttribute("url");

    if (
      [...this.classList].every(
        (cn) =>
          !/^spectrum--(light|dark|darkest|lightest|accent|complement)$/.test(
            cn
          )
      )
    ) {
      this.classList.add("spectrum--light");
    }

    this.classList.add("spectrum", "spectrum--medium");

    if (
      this.hasAttribute("size") &&
      ["S", "M", "L"].includes(this.getAttribute("size"))
    ) {
      this.size = this.getAttribute("size");
    }
  }

  template() {
    return html` <link
        rel="stylesheet"
        type="text/css"
        href="./my-component/my-component.processed.css"
      />
      <div class="spectrum-Card spectrum-Card--size${this.size ?? "M"}">
        <div class="spectrum-Card-body">
          <div class="spectrum-Card-header" id="header">
            <slot class="spectrum-Card-title" name="header"></slot>
          </div>
          <div class="spectrum-Card-content">
            <slot></slot>
          </div>
          ${this.url
            ? html`<div class="spectrum-Card-footer">
                <a class="spectrum-Link" href="${this.url}"
                  ><span>Learn more</span><span id="link-arrow"></span
                ></a>
              </div>`
            : ""}
        </div>
      </div>`;
  }
}

customElements.define("my-component", MyComponent);
