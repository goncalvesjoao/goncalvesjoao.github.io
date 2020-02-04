import $ from "./jquery"

const INITIAL_LEFT = 80
const INITIAL_RIGHT = 100
const MINIMUM_WIDTH = 50

let $container = null
let $rangeHandle = null

function init(containerSelector) {
  $container = $(containerSelector)
  $rangeHandle = $("#rangeHandle")

  updateLeftPosition($rangeHandle, INITIAL_LEFT)
  updateRightPosition($rangeHandle, INITIAL_RIGHT)

  $('body')
    .on("touchstart", dragStart)
    .on("touchend", dragEnd)
    .on("touchmove", drag)
    .on("mousedown", dragStart)
    .on("mouseup", dragEnd)
    .on("mousemove", drag)
}

function dragStart(e) {
  const $target = $(e.target)
  const clientX = (e.type === "touchstart") ? e.touches[0].clientX : e.clientX

  if (!$target.hasClass('dragable')) { return }

  $target.addClass("active")
  $rangeHandle.data("offsetLeft", clientX - $rangeHandle.data("lastLeftPosition"))
  $rangeHandle.data("offsetRight", ($container.width() - clientX) - $rangeHandle.data("lastRightPosition"))
}

function dragEnd(e) {
  $(".dragable.active").removeClass("active")
}

function drag(e) {
  const $activeElement = $(".dragable.active")
  const clientX = (e.type === "touchmove") ? e.touches[0].clientX : e.clientX

  e.preventDefault();

  if (!$activeElement.length) { return }

  if ($activeElement.data("move").includes("left")) {
    updateLeftPosition($rangeHandle, clientX - $rangeHandle.data("offsetLeft"))
  }

  if ($activeElement.data("move").includes("right")) {
    updateRightPosition($rangeHandle, ($container.width() - clientX) - $rangeHandle.data("offsetRight"))
  }
}

function updateLeftPosition($target, leftPosition) {
  $target.data("lastLeftPosition", leftPosition)
  $target.css({ left: leftPosition })
}

function updateRightPosition($target, rightPosition) {
  const lastRightPosition = $target.data("lastRightPosition")

  if (rightPosition >= lastRightPosition && $target.width() <= MINIMUM_WIDTH) {
    return
  }

  $target.data("lastRightPosition", rightPosition)
  $target.css({ right: rightPosition })
}

function rectifyRightPosition() {
  
}

export default init
