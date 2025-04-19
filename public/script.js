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
  
    document.getElementById("quote").innerText = `"${quote.text}"`;
    document.getElementById("author").innerText = `— ${quote.author}`;
  }
  
  // Generate saat pertama kali load
  window.onload = generateQuote;
  