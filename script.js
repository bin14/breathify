const container = document.getElementById("container")
const text = document.getElementById("text")
const number = document.getElementById("number")

const totalTime = 4000
const breatheTime = totalTime / 2
let num = 0

function breathAnimation() {
  if (num >= 30) {
    // alert("Hello! I am an alert box!!")
    container.className = "container"
    hold()
  } else {
    breath()
  }
}

function btnStart() {
  document.getElementById("demo").innerHTML = "Go!"
  setInterval(breathAnimation, totalTime)
  breathAnimation()
}

function btnHold() {
  var timeleft = 8
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer)
      document.getElementById("countdown").innerHTML = "Finished"
    } else {
      document.getElementById("countdown").innerHTML =
        timeleft + " seconds remaining"
    }
    timeleft -= 1
  }, 1000)
}

function hold() {
  demo.innerText = "HOLD!"
  // sw.timer = setInterval(sw.tick, 1000)
  // sw.ego.value = "Stop"
  // sw.ego.onclick = sw.stop
}

function breath() {
  num++
  number.innerText = num
  text.innerText = "Breathe In!"
  container.className = "container grow"

  setTimeout(() => {
    text.innerText = "Breathe Out!"
    container.className = "container shrink"
  }, breatheTime)
}

//STOPWATCH
var sw = {
  // (A) PROPERTIES
  etime: null, // html time display
  erst: null, // html reset button
  ego: null, // html start/stop button
  timer: null, // timer object
  now: 0, // current elapsed time

  // (B) INITIALIZE
  init: () => {
    // (B1) GET HTML ELEMENTS
    sw.etime = document.getElementById("sw-time")
    sw.erst = document.getElementById("sw-rst")
    sw.ego = document.getElementById("sw-go")

    // (B2) ENABLE BUTTON CONTROLS
    sw.erst.onclick = sw.reset
    sw.ego.onclick = sw.start
    sw.erst.disabled = false
    sw.ego.disabled = false
  },

  // (C) START!
  start: () => {
    sw.timer = setInterval(sw.tick, 1000)
    sw.ego.value = "Stop"
    sw.ego.onclick = sw.stop
  },

  // (D) STOP
  stop: () => {
    clearInterval(sw.timer)
    sw.timer = null
    sw.ego.value = "Start"
    sw.ego.onclick = sw.start

    btnHold()
  },

  // (E) TIMER ACTION
  tick: () => {
    // (E1) CALCULATE HOURS, MINS, SECONDS
    sw.now++
    let hours = 0,
      mins = 0,
      secs = 0,
      remain = sw.now
    hours = Math.floor(remain / 3600)
    remain -= hours * 3600
    mins = Math.floor(remain / 60)
    remain -= mins * 60
    secs = remain

    // (E2) UPDATE THE DISPLAY TIMER
    if (hours < 10) {
      hours = "0" + hours
    }
    if (mins < 10) {
      mins = "0" + mins
    }
    if (secs < 10) {
      secs = "0" + secs
    }
    sw.etime.innerHTML = hours + ":" + mins + ":" + secs
  },

  // (F) RESET
  reset: () => {
    if (sw.timer != null) {
      sw.stop()
    }
    sw.now = -1
    sw.tick()

    location.reload()
  },
}
window.addEventListener("load", sw.init)
//STOPWATCH
