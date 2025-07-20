export default function loadHomepage() {
  const homepageContent = document.createElement("div");

  const welcomeHeading = document.createElement("h1");
  welcomeHeading.innerText = "Selamat datang di Lapo Batak Bahari";

  const introParagraph = document.createElement("p");
  introParagraph.innerText =
    "Di sini, Anda bisa menikmati masakan Batak yang lezat sambil mendengar lagu 'Mardua Holong'.";

  const quotesParagraph = document.createElement("p");
  quotesParagraph.innerHTML =
    "Jangan lupa makan <em>daging biang</em> dengan <em>sayur kol</em>";

  const lyricsHeading = document.createElement("h3");
  lyricsHeading.innerText = "Penggalan Lirik Mardua Holong";

  const lyricsDiv = document.createElement("div");
  lyricsDiv.innerHTML = `
        <span>Tarsongon bunga naung malos di ladang i</span>
        <br />
        <span>Songoni ma rohakki nunga malala</span>
        <br />
        <span>Dang hurimpu songoni</span>
        <br />
        <span>Dibahen ho holonghi gabe meam-meammu</span>
`;

  homepageContent.appendChild(welcomeHeading);
  homepageContent.appendChild(introParagraph);
  homepageContent.appendChild(quotesParagraph);
  homepageContent.appendChild(lyricsHeading);
  homepageContent.appendChild(lyricsDiv);

  return homepageContent;
}
