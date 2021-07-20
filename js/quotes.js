const quotes = [
    {
        quote: "자신감은 전염된다. 자신감의 부족도 마찬가지다.",
        author: "빈스 롬바르디",
    },
    {
        quote: "하지 말아야 할 것을 효율적으로 하는 것보다 더 비생산적인 것은 없다.",
        author: "피터 드러커",
    },
    {
        quote: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해 무엇인가 하고 있어야 한다.",
        author: "마하트마 간디",
    },
    {
        quote: "고통은 잠깐이다. 포기는 영원히 남는다.",
        author: "랜스 암스트롱",
    },
    {
        quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
        author: "헨렌 켈러",
    },
    {
        quote: "내 비장의 무기는 아직 손안에 있다 .그것은 희망이다.",
        author: "나폴레옹",
    },
    {
        quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.",
        author: "마크 트웨인",
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘 존슨",
    },
    {
        quote: "아주 작은 불꽃이 커다란 불길로 타오를 수 있다.",
        author: "단테 알리기에리",
    },
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

