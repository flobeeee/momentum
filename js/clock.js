const clock = document.querySelector("h2#clock")

function getClock() {
  const date = new Date()
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClock()
setInterval(getClock, 1000) // 1초마다 함수 실행

