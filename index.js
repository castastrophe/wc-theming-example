import "./my-component/my-component.js";

import { ActionMenu } from "@spectrum-web-components/action-menu/src/ActionMenu.js";
customElements.define("sp-action-menu", ActionMenu);

document.addEventListener("change", (event) => {
  if (!event.target.closest("sp-action-menu")) return;
  console.log(event);
  // document.body.classList();
});
