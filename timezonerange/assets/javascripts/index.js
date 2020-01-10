import $ from "./jquery"
import "jquery-ui-dist/jquery-ui.js";

function init() {
  $(".handle").draggable({
    axis: "x",
    grid: [ 20, 20 ],
    containment: "parent",
    obstacle: "#butNotHere",
    preventCollision: true
  });
}

window.addEventListener("DOMContentLoaded", init);
