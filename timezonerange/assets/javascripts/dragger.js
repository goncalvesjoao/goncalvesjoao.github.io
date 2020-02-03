import $ from "./jquery"

let $startAtHandle = null
let $endAtHandle = null

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

  $(containerSelector)
    .on("touchstart", dragStart)
    .on("touchend", dragEnd)
    .on("touchmove", drag)
    .on("mousedown", dragStart)
    .on("mouseup", dragEnd)
    .on("mousemove", drag)
    .on("mouseleave", dragEnd)
}

function dragStart(e) {
  let target = null
  const clientX = (e.type === "touchstart") ? e.touches[0].clientX : e.clientX

  if (e.target === $startAtHandle.get(0)) {
    target = $startAtHandle
  } else if (e.target === $endAtHandle.get(0)) {
    target = $endAtHandle
  }

  if (!target) { return }

  target.data("active", true)
  target.data("initialX", clientX - (target.data("xOffset") || 0))
}

function dragEnd(e) {
  const target = activeHandle()

  if (!target) { return }

  target.data("active", false)
  target.data("initialX", target.data("currentX"))
}

function drag(e) {
  const target = activeHandle()
  const clientX = (e.type === "touchmove") ? e.touches[0].clientX : e.clientX

  if (!target) { return }

  e.preventDefault();

  target.data("currentX", clientX - target.data("initialX"))
  target.data("xOffset", target.data("currentX"))
  target.css({
    left: target.data("currentX")
  })
}

export default init
