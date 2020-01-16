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
      const $this = $(this)
      let shouldDrag = true

      const newLeftPosition = ui.position.left
      const endAtHandleLeft = $endAtHandle.position().left
      const lastLeftPosition = $this.data('lastLeftPosition') || $this.position().left
      const startAtHandleRight = $startAtHandle.position().left + $startAtHandle.width() + gridLength

      if ($this.attr('id') === 'startAtHandle') {
        console.log(newLeftPosition, lastLeftPosition)
        // shouldDrag = true
      } else if ($this.attr('id') === 'endAtHandle' && newLeftPosition > lastLeftPosition) {
        shouldDrag = true
      } else if (startAtHandleRight >= endAtHandleLeft) {
        shouldDrag = false
      }

      $this.data('lastLeftPosition', newLeftPosition)

      return shouldDrag
    }
  }

  $startAtHandle.draggable({
    ...defaultOptions,
  })

  $endAtHandle.draggable({
    ...defaultOptions,
  })
}

export default initializeDraggable
