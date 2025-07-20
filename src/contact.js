export default function loadContactPage() {
  const contactContentContainer = document.createElement("div");

  const contactTitle = document.createElement("h1");
  contactTitle.innerText = "Kontak & Lokasi";

  const contactTextContent = document.createElement("div");
  contactTextContent.innerHTML = `
  <p>📍 Alamat: Jl. Danau Toba No. 77, Medan</p>
  <p>📞 Telepon: 0822-1234-5678</p>
  <p>📧 Email: info@lapobatakbahari.com</p>

  <h2>Jam Operasional</h2>
  <ul>
    <li>Senin – Sabtu: 10.00 – 21.00 WIB</li>
    <li>Minggu: Tutup</li>
  </ul>
  `;

  contactContentContainer.appendChild(contactTitle);
  contactContentContainer.appendChild(contactTextContent);

  return contactContentContainer;
}
