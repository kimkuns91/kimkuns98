const quotes = [
    {
      quote: "아이디어의 질은 당신이 제시하는 아이디어의 양에 정비례한다.",
      author: "브라이언 트레이시",
    },
    {
      quote: "자신을 믿지 못하는 자는 다른 누구도 진정으로 믿지 못한다.",
      author: "장 레츠",
    },
    {
      quote: "나는 깊게 파기 위해 넓게 파기 시작했다.",
      author: "스피노자",
    },
    {
      quote: "타고난 능력이란 없다. 경험을 통해 인간은 무엇이든 될 수 있다.",
      author: "타불라 라사",
    },
    {
      quote: "마음을 위대한 일로 이끄는 것은 오직 열정, 위대한 열정뿐이다.",
      author: "드니 디드로",
    },
    {
      quote: "삶의 원동력은 무엇일까? 첫째도 욕망, 둘째도 욕망, 셋째도 욕망이다.",
      author: "스탠리 쿠니츠",
    },
    {
      quote: "위대한 업적은 대개 커다란 위험을 감수한 결과이다.",
      author: " 헤로도토스",
    },
    {
      quote: "도전은 인생을 흥미롭게 만들며, 도전의 극복이 인생을 의미있게 한다.",
      author: "조슈아 J. 마린",
    },
    {
      quote: "불가능해 보이는 것은 불확실한 가능성보다 항상 더 낫다.",
      author: "아리스토텔레스",
    },
    {
      quote: "이 세상에 열정없이 이루어진 위대한 것은 없다.",
      author: "게오르크 빌헬름",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerHTML = `${todaysQuote.quote}`;
  author.innerText = todaysQuote.author;