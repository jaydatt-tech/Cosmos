// Homepage-only interactions: rotating space facts and topic search.
const spaceFacts = [
  "A day on Venus is longer than its year. Venus takes about 243 Earth days to rotate once, but only about 225 Earth days to orbit the Sun.",
  "Neutron stars are so dense that a sugar-cube-sized amount of their material would have an enormous mass on Earth.",
  "The light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
  "Saturn's average density is lower than water's. A sufficiently large ocean could theoretically float Saturn.",
  "The Milky Way and Andromeda galaxies are moving toward each other and are expected to interact billions of years from now."
];

let currentFact = 0;
const factText = document.getElementById("spaceFact");
const factIndex = document.getElementById("factIndex");
const newFactButton = document.getElementById("newFact");

if (newFactButton && factText && factIndex) {
  newFactButton.addEventListener("click", () => {
    currentFact = (currentFact + 1) % spaceFacts.length;
    factText.textContent = spaceFacts[currentFact];
    factIndex.textContent = String(currentFact + 1).padStart(2, "0");
  });
}

const searchForm = document.getElementById("quickSearch");
const searchInput = document.getElementById("siteSearch");
const searchMessage = document.getElementById("searchMessage");

const topics = [
  { words: ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "planet", "solar system"], url: "pages/solar-system.html", label: "the Solar System" },
  { words: ["galaxy", "galaxies", "milky way"], url: "pages/galaxies.html", label: "Galaxies" },
  { words: ["black hole", "black holes"], url: "pages/black-holes.html", label: "Black Holes" },
  { words: ["star", "stars", "supernova"], url: "pages/stars.html", label: "Stars" },
  { words: ["nebula", "nebulae"], url: "pages/nebulae.html", label: "Nebulae" },
  { words: ["mission", "nasa", "isro", "rocket", "spacecraft"], url: "pages/missions.html", label: "Space Missions" },
  { words: ["quiz", "test"], url: "pages/quiz.html", label: "Space Quiz" },
  { words: ["gallery", "images", "photos"], url: "pages/gallery.html", label: "Space Gallery" }
];

if (searchForm && searchInput && searchMessage) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      searchMessage.textContent = "Type a space topic to begin exploring.";
      searchInput.focus();
      return;
    }

    const match = topics.find((topic) => topic.words.some((word) => word.includes(query) || query.includes(word)));
    if (match) {
      searchMessage.textContent = `Opening ${match.label}...`;
      window.location.href = match.url;
    } else {
      searchMessage.textContent = "No exact match yet. Try Mars, galaxy, black hole, NASA or quiz.";
    }
  });
}
