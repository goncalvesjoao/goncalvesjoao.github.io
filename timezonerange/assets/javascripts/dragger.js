import $ from "./jquery"

let $startAtHandle = null
let $endAtHandle = null
let $rangeHandle = null

function activeHandle() {
  if ($startAtHandle.data("active")) {
    return $startAtHandle
  } else if ($endAtHandle.data("active")) {
    return $endAtHandle
  }

  return false
}

function init(containerSelector) {
  $startAtHandle = $("#startAtHandle")
  $endAtHandle = $("#endAtHandle")
  $rangeHandle = $("#rangeHandle")

  moveHandle($startAtHandle, 80)
  moveHandle($endAtHandle, 400)

  $(containerSelector)
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

  $target.data("active", true)
  $target.data("initialLeft", clientX - $target.data("lastLeftPosition"))
}

function dragEnd(e) {
  const $target = activeHandle()

  if (!$target) { return }

  $target.data("active", false)
}

function drag(e) {
  const $target = activeHandle()
  const clientX = (e.type === "touchmove") ? e.touches[0].clientX : e.clientX

  e.preventDefault();

  if (!$target) { return }

  if ($target.hasClass('handle')) {
    moveHandle($target, clientX - $target.data("initialLeft"))
  } else {
    console.log('asd')
    updatePosition($target, clientX - $target.data("initialLeft"))
  }
}

function moveHandle(target, leftPosition) {
  let newLeftPosition = leftPosition
  const endAtHandleLeft = $endAtHandle.position().left
  const lastLeftPosition = target.data("lastLeftPosition")
  const startAtHandleRight = $startAtHandle.position().left + $startAtHandle.width()

  if (target.attr('id') === 'startAtHandle') {
    if ((newLeftPosition + $startAtHandle.width()) >= endAtHandleLeft && newLeftPosition >= lastLeftPosition) {
      newLeftPosition = endAtHandleLeft - $startAtHandle.width()
    }
  } else if (target.attr('id') === 'endAtHandle') {
    if (newLeftPosition <= startAtHandleRight && newLeftPosition <= lastLeftPosition) {
      newLeftPosition = startAtHandleRight
    }
  }

  updatePosition(target, newLeftPosition)
  updateRangeHandle()
}

function updatePosition(target, leftPosition) {
  target.data("lastLeftPosition", leftPosition)
  target.css({ left: leftPosition })
}

function updateRangeHandle() {
  const startAtHandleRight = $startAtHandle.position().left + $startAtHandle.width()
  const width = $endAtHandle.position().left - startAtHandleRight

  $rangeHandle.css({ left: startAtHandleRight, width: width })
}

export default init
