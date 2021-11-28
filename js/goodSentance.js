const goodSentances = [
  "아무거나로 인생을 낭비하지 않기",
  "너를 보면 가슴에서 장미꽃이 피어나고,<br /> 캄캄한 밤바다에 등대불이 반짝인다.",
  "산다는 것 자체를 하나의 축제로 여기면,<br /> 우리의 삶은 목표가 아니라 과정이 더 중요해진다.",
  "길을 잃었을 때 그 주변의 아름다움을 볼 수 있었다.",
  "다른사람의 충고는 듣지마.<br /> 자기가 지금 뭐하고 있는지 제대로 아는 사람은 아무도 없다.<br /> 네가 하고 싶은대로 해",
  "태산(泰山)이 높다 하지만 하늘 아래 산이로다. <br />오르고 또 오르면 못 오를 리 없건만 <br /> 사람이 자기 스스로 오르지않고 산을 높다 하는구나",
  "고통은 잠깐이다. 포기는 영원히 남는다.",
  "모든 성취의 출발점은 꿈을 꾸는 것에서 시작됩니다.",
  "미친 짓이란, <br /> 매번 똑같은 행동을 반복하면서 다른 결과를 기대하는 것이다.",
  "내일 죽을 것처럼 살아라. 영원히 살 것처럼 공부하라."
]

const goodSentance = document.querySelector("#goodSentance span:first-child")

const todayGoodSentance = goodSentances[Math.floor(Math.random() * goodSentances.length)]

goodSentance.innerHTML = todayGoodSentance