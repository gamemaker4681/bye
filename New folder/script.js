function toggleText(section) {
  const paragraph = section.querySelector('p');
  paragraph.classList.toggle('show');
  section.classList.toggle('active');
  showRandomQuote();
}
function showRandomQuote() {
  const quotes = [
    "Noorulain, you are not just in my heart, you are the heartbeat itself.",
    "If love had a face, it would look like you; if it had a soul, it would breathe like you.",
    "Every prayer I whisper carries your name, as if God and I both know you’re my forever.",
    "Noorulain, you are the poem my heart has been writing long before I knew words.",
    "Even eternity feels short if it means loving you through it.",
    "Your presence turns my fears into faith and my life into a story worth telling.",
    "Noorulain, you are not a part of my life, you are the meaning of it.",
    "If my love for you were ink, the oceans would run dry and still my heart would write your name.",
    "In every version of me, in every lifetime, I know I would still choose you."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const popup = document.getElementById('quotePopup');
  popup.querySelector('p').textContent = randomQuote;
  popup.style.display = 'block';
  setTimeout(() => { popup.style.display = 'none'; }, 5000);
}
function closeQuote() {
  document.getElementById('quotePopup').style.display = 'none';
}