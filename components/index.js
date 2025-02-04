/** @format */

import { ButtonStyle } from "../styles/buttonStyle.js";

function Button(btnValue, bgColor, rounded, padding) {
  const button = document.createElement("button");
  button.textContent = btnValue;

  if (btnValue === "Register") {
    button.style.border = "none";
    button.style.width = "100px";
  }
  ButtonStyle(button, bgColor, rounded, padding);

  document.body.appendChild(button);
}

export { Button };
