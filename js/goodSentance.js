const goodSentances = [
  "Experience is the best teacher",
  "너를 보면 가슴에서 장미꽃이 피어나고,<br /> 캄캄한 밤바다에 등대불이 반짝인다.",
  "산다는 것 자체를 하나의 축제로 여기면,<br /> 우리의 삶은 목표가 아니라 과정이 더 중요해진다.",
  "Every day, every minute, every second <br />you have a chance to change",
  "You will never know until you try",
  "태산(泰山)이 높다 하지만 하늘 아래 산이로다. <br />오르고 또 오르면 못 오를 리 없건만 <br /> 사람이 자기 스스로 오르지않고 산을 높다 하는구나",
  "step by step goes a long way",
  "Only I can change my life, No one can do it for me",
  "If you do nothing, nothing happens",
  "Better late than never",
  "무엇이 선인지 아는 삶은 선을 행할 것이다"
]

const goodSentance = document.querySelector("#goodSentance span:first-child")

const todayGoodSentance = goodSentances[Math.floor(Math.random() * goodSentances.length)]

goodSentance.innerHTML = todayGoodSentance