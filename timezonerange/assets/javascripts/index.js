import $ from "./jquery"
import "jquery-ui-dist/jquery-ui.js"
import "jquery-ui-touch-punch"

function initializeDraggable() {
  const gridLength = 20
  const $startAtHandle = $("#startAtHandle")
  const $endAtHandle = $("#endAtHandle")

  const defaultOptions = {
    axis: "x",
    grid: [gridLength, gridLength],
    drag: function(event, ui) {
      const startAtHandleRight = $startAtHandle.position().left + $startAtHandle.width() + gridLength
      const endAtHandleLeft = $endAtHandle.position().left

      if (startAtHandleRight >= endAtHandleLeft) {
        return false
      }
    }
  }

  $startAtHandle.draggable({
    ...defaultOptions,
  })

  $endAtHandle.draggable({
    ...defaultOptions,
  })
}

function init() {
  initializeDraggable()
}

window.addEventListener("DOMContentLoaded", init)
