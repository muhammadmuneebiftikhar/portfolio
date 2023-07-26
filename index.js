const portfolios = [
  {
    id: 1,
    name: "Life INsurance NZ",
    img: "portfolio1",
    url: "https://lifeinsurancenz.com/",
    stack: "WordPress || Elementor",
  },
  {
    id: 2,
    name: "Mechanical Break Down Insurance NZ",
    img: "portfolio2",
    url: "https://mechanicalbreakdowninsurance.co.nz/",
    stack: "WordPress || Elementor",
  },
  {
    id: 3,
    name: "Pay Bill Over Call",
    img: "portfolio7",
    url: "https://paybillovercall.com/",
    stack: "WordPress || Elementor",
  },
  {
    id: 4,
    name: "Shazia LLC",
    img: "portfolio4",
    url: "https://shaziallc.com/",
    stack: "WordPress || Elementor",
  },
  {
    id: 5,
    name: "Raval Media",
    img: "portfolio5",
    url: "https://raval.media/",
    stack: "WordPress || Elementor",
  },
  {
    id: 6,
    name: "Computer Waste London",
    img: "portfolio6",
    url: "https://computerwastelondon.co.uk/",
    stack: "WordPress || Elementor",
  },
];

const card = document.getElementById("cards");
console.log(portfolios);

for (let i = 0; i < portfolios.length; i++) {
  card.innerHTML += `<div class="card">
  <a href="${portfolios[i].url}" target="_blank"><img src="./porfolios/${portfolios[i].img}.png" alt="${portfolios[i].name}">
  <div class="cardContainer">
    <h4><b>${portfolios[i].name}</b></h4>
    <div class="stack">
    <p><span style="color:#222831"> ${portfolios[i].stack}</span></p>
    </div>
  </div></a>
</div>`;
}
