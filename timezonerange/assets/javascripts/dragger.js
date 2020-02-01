const startAtHandle = () => document.querySelector("#startAtHandle")
const endAtHandle = () => document.querySelector("#endAtHandle")

function number(object) {
  const int = Number(object)

  return isNaN(int) ? 0 : int
}

function activeHandle() {
  if (startAtHandle().dataset.active === "true") {
    return startAtHandle()
  } else if (endAtHandle().dataset.active === "true") {
    return endAtHandle()
  }

  return false
}

function init() {
  var container = document.querySelector("#container");

  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, false);

  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);
}

function dragStart(e) {
  let target = null
  const clientX = (e.type === "touchstart") ? e.touches[0].clientX : e.clientX

  if (e.target === startAtHandle()) {
    target = startAtHandle()
  } else if (e.target === endAtHandle()) {
    target = endAtHandle()
  }

  if (!target) { return }

  target.dataset.active = true
  target.dataset.initialX = clientX - number(target.dataset.xOffset)
}

function dragEnd(e) {
  const target = activeHandle()

  if (!target) { return }

  target.dataset.active = false
  target.dataset.initialX = number(target.dataset.currentX)
}

function drag(e) {
  const target = activeHandle()
  const clientX = (e.type === "touchmove") ? e.touches[0].clientX : e.clientX

  if (!target) { return }

  e.preventDefault();

  target.dataset.currentX = clientX - number(target.dataset.initialX)
  target.dataset.xOffset = target.dataset.currentX
  target.style.transform = "translate3d(" + number(target.dataset.currentX) + "px, 0px, 0)"
}

export default init
