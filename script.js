// Liste de dessins pour tester notre application Zitha
const artworks = [
  {
    id: '1',
    title: 'Cyberpunk Neon',
    artist: 'AlexArt',
    url: 'https://picsum.photos',
    desc: 'Une illustration numérique futuriste pleine de lumières vives.',
  },
  {
    id: '2',
    title: 'Aquarelle Matinale',
    artist: 'SophieDraw',
    url: 'https://picsum.photos',
    desc: "Peinture douce faite à l'aube représentant la nature au réveil.",
  },
  {
    id: '3',
    title: 'Abstrait Sombre',
    artist: 'DarkMind',
    url: 'https://picsum.photos',
    desc: 'Exploration profonde des ombres, du chaos et des textures graphiques.',
  },
  {
    id: '4',
    title: 'Mecha Titan',
    artist: 'GamerX',
    url: 'https://picsum.photos',
    desc: "Concept art impressionnant d'un robot géant de combat pour un jeu vidéo.",
  },
];

const contentArea = document.getElementById('app-content');

// 1. Fonction pour afficher la Galerie (Écran d'accueil)
function showGallery() {
  let html = '<div class="gallery-grid">';

  artworks.forEach((art) => {
    html += `
      <div class="art-card" onclick="showDetail('${art.id}')">
        <img src="${art.url}" class="art-image" alt="${art.title}">
        <div class="art-info">
          <h3>${art.title}</h3>
          <p>@${art.artist}</p>
        </div>
      </div>
    `;
  });

  html += '</div>';
  contentArea.innerHTML = html;
}

// 2. Fonction pour afficher le Détail d'une œuvre
function showDetail(id) {
  const art = artworks.find((item) => item.id === id);
  if (!art) return;

  contentArea.innerHTML = `
    <div class="detail-screen">
      <button class="back-button" onclick="showGallery()">← Retour</button>
      
      <img src="${art.url}" class="detail-image" alt="${art.title}">
      
      <div class="detail-header">
        <div>
          <h2 class="detail-title">${art.title}</h2>
          <p class="detail-artist">par ${art.artist}</p>
        </div>
        <button class="fav-button" onclick="toggleFav(this)">🤍</button>
      </div>
      
      <div class="description-box">
        <h3>Description</h3>
        <p>${art.desc}</p>
      </div>
    </div>
  `;
}

// 3. Fonction pour gérer le bouton coup de cœur (Like)
function toggleFav(button) {
  if (button.innerText === '🤍') {
    button.innerText = '❤️';
  } else {
    button.innerText = '🤍';
  }
}

// Lancement automatique de l'application sur la galerie au démarrage
showGallery();
