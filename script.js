const games = [
  {
    title: "Pet Galaxy Heroes",
    description: "Co-op raids, starship hubs, and collectible cosmic pets.",
    players: "1.3M active",
  },
  {
    title: "Mystic Egg Tycoon",
    description: "Build hatcheries and trade limited eggs across realms.",
    players: "920K active",
  },
  {
    title: "Treasure Isles",
    description: "Sail through floating islands with your best companions.",
    players: "760K active",
  },
  {
    title: "Neon Pet Raceway",
    description: "Race, boost, and evolve your team to the top.",
    players: "540K active",
  },
];

const stats = [
  { label: "Daily Logins", value: "2.8M" },
  { label: "Pets Hatched Today", value: "9.4M" },
  { label: "Trades Completed", value: "1.2M" },
  { label: "Event Rewards", value: "34B" },
];

const pets = [
  { name: "Celestial Kitsune", rarity: "Mythic", value: "12.8T", demand: "High", trend: "up" },
  { name: "Prism Phoenix", rarity: "Legendary", value: "7.1T", demand: "High", trend: "up" },
  { name: "Void Serpent", rarity: "Legendary", value: "5.4T", demand: "Medium", trend: "down" },
  { name: "Aurora Griffin", rarity: "Epic", value: "2.9T", demand: "High", trend: "up" },
  { name: "Lunar Manta", rarity: "Epic", value: "1.7T", demand: "Medium", trend: "up" },
  { name: "Steam Fox", rarity: "Rare", value: "820B", demand: "Low", trend: "down" },
  { name: "Sakura Sprite", rarity: "Rare", value: "640B", demand: "Medium", trend: "up" },
];

const blogs = [
  {
    title: "Eclipse Event Part 2",
    date: "September 19, 2024",
    summary: "New shadow zones, triple hatch weekends, and exclusive relics drop this Friday.",
  },
  {
    title: "Trading Hub Refresh",
    date: "September 10, 2024",
    summary: "Updated kiosks, favorite listings, and a smoother market graph experience.",
  },
  {
    title: "Developer Diary #12",
    date: "August 30, 2024",
    summary: "How we balance pet values and keep every rarity exciting to chase.",
  },
];

const gamesGrid = document.getElementById("gamesGrid");
const statsGrid = document.getElementById("statsGrid");
const petTable = document.getElementById("petTable");
const blogGrid = document.getElementById("blogGrid");

const heroPlayers = document.getElementById("heroPlayers");
const heroPets = document.getElementById("heroPets");
const heroEvents = document.getElementById("heroEvents");

function renderGames() {
  gamesGrid.innerHTML = games
    .map(
      (game) => `
        <article class="card">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
          <p><strong>${game.players}</strong></p>
        </article>
      `
    )
    .join("");
}

function renderStats() {
  statsGrid.innerHTML = stats
    .map(
      (stat) => `
        <div class="stat-card">
          <span>${stat.label}</span>
          <strong>${stat.value}</strong>
        </div>
      `
    )
    .join("");
}

function renderPets(filter = "", rarity = "all") {
  const filtered = pets.filter((pet) => {
    const matchesName = pet.name.toLowerCase().includes(filter.toLowerCase());
    const matchesRarity = rarity === "all" || pet.rarity === rarity;
    return matchesName && matchesRarity;
  });

  petTable.innerHTML = filtered
    .map(
      (pet) => `
        <tr>
          <td>${pet.name}</td>
          <td><span class="badge ${pet.rarity.toLowerCase()}">${pet.rarity}</span></td>
          <td>${pet.value}</td>
          <td>${pet.demand}</td>
          <td class="trend ${pet.trend}">${pet.trend === "up" ? "▲ Rising" : "▼ Falling"}</td>
        </tr>
      `
    )
    .join("");
}

function renderBlogs() {
  blogGrid.innerHTML = blogs
    .map(
      (post) => `
        <article class="blog-card">
          <span>${post.date}</span>
          <h3>${post.title}</h3>
          <p>${post.summary}</p>
          <button class="ghost">Read Update</button>
        </article>
      `
    )
    .join("");
}

function updateHeroStats() {
  heroPlayers.textContent = "2.8M";
  heroPets.textContent = "94M";
  heroEvents.textContent = "7";
}

function startCountdown() {
  const dropTimer = document.getElementById("dropTimer");
  let remaining = 5 * 60 * 60 + 18 * 60 + 45;

  setInterval(() => {
    remaining = remaining <= 0 ? 6 * 60 * 60 : remaining - 1;
    const hours = String(Math.floor(remaining / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
    const seconds = String(remaining % 60).padStart(2, "0");
    dropTimer.textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

const searchInput = document.getElementById("searchInput");
const rarityFilter = document.getElementById("rarityFilter");

searchInput.addEventListener("input", (event) => {
  renderPets(event.target.value, rarityFilter.value);
});

rarityFilter.addEventListener("change", (event) => {
  renderPets(searchInput.value, event.target.value);
});

renderGames();
renderStats();
renderPets();
renderBlogs();
updateHeroStats();
startCountdown();
