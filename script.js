const quotes = [
  {
    author: "Alexander Agung",
    text: "Saya tidak takut pada pasukan singa yang dipimpin oleh seekor domba; saya takut pada pasukan domba yang dipimpin oleh seekor singa."
  },
  {
    author: "Socrates",
    text: "Rahasia perubahan adalah memusatkan seluruh energimu bukan untuk melawan yang lama, tetapi untuk membangun yang baru."
  },
  {
    author: "Plato",
    text: "Kemenangan atas diri sendiri adalah kemenangan terbesar."
  },
  {
    author: "Aristoteles",
    text: "Kita adalah apa yang kita lakukan berulang kali. Maka dari itu, keunggulan bukanlah tindakan, tetapi kebiasaan."
  },
  {
    author: "Heraclitus",
    text: "Satu-satunya yang tetap adalah perubahan."
  },
  {
    author: "Pythagoras",
    text: "Diam lebih baik daripada kata-kata kosong."
  },
  {
    author: "Homer",
    text: "Keberanian adalah setengah dari kemenangan."
  },
  {
    author: "Pericles",
    text: "Kebebasan adalah hasil dari keberanian."
  },
  {
    author: "Democritus",
    text: "Kebahagiaan terletak pada kebebasan, dan kebebasan terletak pada keberanian."
  },
  {
    author: "Epictetus",
    text: "Bukan kejadian yang mengganggu kita, tetapi cara kita memandangnya."
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const boxEl = document.querySelector(".quote-box");

  // Tambah efek animasi keluar
  quoteEl.classList.add("fade-out");
  authorEl.classList.add("fade-out");
  boxEl.classList.add("animate");

  setTimeout(() => {
    quoteEl.innerText = `"${quote.text}"`;
    authorEl.innerText = `— ${quote.author}`;

    // Hapus efek untuk animasi masuk
    quoteEl.classList.remove("fade-out");
    authorEl.classList.remove("fade-out");
    boxEl.classList.remove("animate");
  }, 500); // durasi sesuai transisi CSS
}

// Tampilkan kutipan pertama saat halaman load
window.onload = generateQuote;
