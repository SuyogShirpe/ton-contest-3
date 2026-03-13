// --- 1. THE DATA ARRAYS ---
const dApps = [
  {
    name: "Tonkeeper",
    category: "Wallet",
    desc: "The premier non-custodial wallet for the TON ecosystem. Tonkeeper features a highly intuitive mobile interface, an integrated dApp browser, and the innovative 'Tonkeeper Battery' feature, which allows users to pay blockchain gas fees using stablecoins or zero-balance accounts.",
    role: "The primary gateway for millions of users to securely self-custody their assets, stake Toncoin, and seamlessly interact with decentralized applications.",
    link: "https://tonkeeper.com",
    img: "assets1/tonkeeper.png",
  },
  {
    name: "Telegram Wallet",
    category: "Wallet",
    desc: "A custodial crypto wallet seamlessly integrated natively inside the Telegram messenger. It removes the friction of seed phrases and complex onboarding, allowing users to buy crypto via P2P markets and send it to contacts as easily as sending a text message.",
    role: "The ultimate Web2-to-Web3 bridge, exposing Telegram's 900+ million active users to the TON ecosystem through a familiar, frictionless interface.",
    link: "https://wallet.tg",
    img: "assets1/t_wallet.jpeg",
  },
  {
    name: "STON.fi",
    category: "DEX",
    desc: "A Zero-Trust Cross-Chain DEX built on TON. It utilizes an advanced Automated Market Maker (AMM) model to enable virtually zero-fee, instant token swaps. It also offers lucrative yield farming opportunities and deep integration SDKs for developers.",
    role: "The backbone of TON's decentralized trading, providing massive liquidity pools and trustless token exchange infrastructure.",
    link: "https://ston.fi",
    img: "assets1/stonfi.jpeg",
  },
  {
    name: "DeDust",
    category: "DEX",
    desc: "An advanced, highly efficient decentralized exchange on TON. DeDust is designed with a heavy focus on developer experience and user-centric UI, offering advanced portfolio management, stable-swap routing, and seamless token integration.",
    role: "Driving complex decentralized trading volume, supporting new token launches, and providing developers with robust DeFi building blocks.",
    link: "https://dedust.io",
    img: "assets1/dedust.png",
  },
  {
    name: "Getgems",
    category: "NFT Marketplace",
    desc: "The largest and most liquid NFT marketplace on the TON blockchain. Getgems supports the minting, trading, and auctioning of digital collectibles, Soulbound Tokens (SBTs), and highly coveted Telegram anonymous numbers and usernames.",
    role: "The cultural and artistic hub of the ecosystem, empowering digital ownership, creator economies, and ecosystem-wide NFT integrations.",
    link: "https://getgems.io",
    img: "assets1/getgames.png",
  },
  {
    name: "EVAA",
    category: "DeFi Lending",
    desc: "The premier decentralized lending and borrowing protocol natively built on the TON blockchain. Users can supply assets to earn dynamic interest yields or borrow against their crypto collateral safely and transparently.",
    role: "Unlocking massive capital efficiency within the ecosystem by allowing users to leverage their digital assets without having to sell them.",
    link: "https://evaa.finance",
    img: "assets1/evaa.jpeg",
  },
  {
    name: "Tonstakers",
    category: "DeFi Staking",
    desc: "The leading Liquid Staking Derivatives (LSD) protocol on the TON blockchain. Users stake their native Toncoin to help secure the network consensus, and in return receive 'tsTON', a yield-bearing token that can be simultaneously used in other DeFi apps.",
    role: "Maximizing the blockchain's overall security while ensuring user capital remains highly liquid and productive across the broader DeFi landscape.",
    link: "https://tonstakers.com",
    img: "assets1/tonstakers.jpeg",
  },
  {
    name: "TonSwap",
    category: "DEX",
    desc: "One of the pioneering open-source decentralized exchanges built for the TON ecosystem. TonSwap was built with a pure ethos of providing trustless, transparent, and censorship-resistant token exchanges for the community.",
    role: "Ensuring a decentralized, community-driven trading infrastructure that respects the core principles of open-source Web3 development.",
    link: "https://tonswap.io",
    img: "assets1/tonswap.png",
  },
];

const tokens = [
  {
    name: "Notcoin",
    category: "GameFi / Web3",
    desc: "The viral Telegram mini-app that ignited the massive 'tap-to-earn' revolution. By simply tapping a golden coin on screen, it successfully onboarded over 35 million mainstream users into Web3. It has since evolved into an 'explore-to-earn' ecosystem platform.",
    role: "The ultimate Web3 onboarding gateway, utilizing gamification to distribute tokens fairly while building one of the largest communities in crypto.",
    link: "https://notco.in",
    img: "assets2/notcoin.png",
  },
  {
    name: "DOGS",
    category: "Community",
    desc: "A massive, natively integrated community token distributed directly to Telegram users. Unlike traditional presales, the DOGS airdrop was calculated based entirely on the age and historical activity level of a user's Telegram account.",
    role: "Rewarding long-term Telegram loyalty, promoting digital identity, and building rapid, decentralized community engagement at a global scale.",
    link: "https://t.me/dogs",
    img: "assets2/dogs.jpeg",
  },
  {
    name: "Blum",
    category: "Hybrid DEX",
    desc: "An innovative hybrid exchange built directly into Telegram. Blum combines an off-chain orderbook for lightning-fast execution with on-chain settlement, offering users access to tokens across multiple blockchains through a gamified interface.",
    role: "Bridging the gap between centralized and decentralized exchanges by offering seamless cross-chain trading natively inside a messenger app.",
    link: "https://blum.io",
    img: "assets2/blum.jpeg",
  },
  {
    name: "BUILD",
    category: "Ecosystem Utility",
    desc: "The foundational token managed by Open Builders, dedicated to recognizing and incentivizing developers, creators, and active contributors within the TON ecosystem. It acts as a financial engine for ecosystem growth.",
    role: "Fueling the network's expansion by funding developer grants, hackathon initiatives, and creating tangible utility for network builders.",
    link: "https://t.me/community_bot",
    img: "assets2/build.webp",
  },
  {
    name: "Resistance Dog",
    category: "Meme / Culture",
    desc: "Known as REDO, this token is heavily inspired by Pavel Durov's iconic hand-drawn dog. It was created to represent digital resistance, privacy, and absolute freedom of speech in the face of centralized censorship.",
    role: "Serving as the unofficial cultural mascot and the leading, organically driven memecoin of the TON blockchain.",
    link: "https://redoton.com",
    img: "assets2/redo.webp",
  },
  {
    name: "Major",
    category: "GameFi",
    desc: "A highly competitive Telegram-based game and star-rating system where users complete ecosystem tasks, engage with apps, and climb social leaderboards to earn cryptocurrency rewards.",
    role: "Driving gamified engagement, increasing user retention, and incentivizing active, meaningful participation across the broader TON ecosystem.",
    link: "https://t.me/major_ofc",
    img: "assets2/major.png",
  },
  {
    name: "Povel Durev",
    category: "Meme",
    desc: "A highly satirical, intentionally misspelled tribute to Telegram's founder. With its iconic 'Spoderman' style artwork, it perfectly captures the chaotic, fun, and rebellious 'degen' culture of early crypto communities.",
    role: "Providing pure community entertainment, viral internet meme culture, and driving high-volume social engagement on the network.",
    link: "https://poveldurev.net",
    img: "assets2/durov.png",
  },
  {
    name: "TON FISH",
    category: "Meme / NFT",
    desc: "One of the earliest and most historic non-foundation social memecoins to launch on the TON blockchain. It proved the viability of community-driven assets and has expanded into its own NFT collections.",
    role: "A pioneer of the network that paved the way for community-driven tokens, fair launches, and meme culture on the TON blockchain.",
    link: "https://tonfish.io",
    img: "assets2/fish.png",
  },
];

const solarSystem = document.getElementById("solar-system");
const universe = document.getElementById("universe");

const initialRadius = 48;
const radiusGap = 26;
const baseSpeed = 10;

function buildSolarSystem(dataArray) {
  // CRITICAL: Clear existing planets before drawing new ones
  // (We only remove .orbit so we don't accidentally delete the Sun!)
  const existingOrbits = document.querySelectorAll(".orbit");
  existingOrbits.forEach((orbit) => orbit.remove());

  dataArray.forEach((app, index) => {
    const orbitRadius = initialRadius + index * radiusGap;
    const orbitSpeed = baseSpeed + index * 6;

    const randomOffset = -(Math.random() * orbitSpeed);

    const orbit = document.createElement("div");
    orbit.className = "orbit";
    orbit.style.width = `${orbitRadius * 2}px`;
    orbit.style.height = `${orbitRadius * 2}px`;
    orbit.style.transform = `translate(-50%, -50%)`;
    orbit.style.animation = `spin ${orbitSpeed}s linear infinite`;
    orbit.style.animationDelay = `${randomOffset}s`;

    const planet = document.createElement("div");
    planet.className = "planet-container";
    planet.style.animation = `counter-spin ${orbitSpeed}s linear infinite`;
    planet.style.animationDelay = `${randomOffset}s`;

    planet.onclick = (e) => {
      e.stopPropagation();
      openPanel(app.name, app.category, app.desc, app.role, app.link, app.img);
    };

    const img = document.createElement("img");
    img.src = app.img;

    planet.appendChild(img);
    orbit.appendChild(planet);
    solarSystem.appendChild(orbit);
  });
}

// --- 3. THE TOGGLE LOGIC ---
function switchView(viewType) {
  // Reset button styles
  document.getElementById("btn-dapps").classList.remove("active");
  document.getElementById("btn-tokens").classList.remove("active");

  if (viewType === "dapps") {
    document.getElementById("btn-dapps").classList.add("active");
    buildSolarSystem(dApps);
  } else if (viewType === "tokens") {
    document.getElementById("btn-tokens").classList.add("active");
    buildSolarSystem(tokens);
  }
}

// --- 4. UI INTERACTIONS ---
function openPanel(name, category, desc, role, link, imgSrc) {
  universe.classList.add("paused");
  document.getElementById("panel-title").textContent = name;
  document.getElementById("panel-category").textContent = category;
  document.getElementById("panel-desc").textContent = desc;
  document.getElementById("panel-role").textContent = role;
  document.getElementById("panel-link").href = link;
  document.getElementById("panel-logo").src = imgSrc;
  document.getElementById("info-overlay").classList.add("active");
  document.getElementById("info-panel").classList.add("active");
}

function closePanel() {
  document.getElementById("info-overlay").classList.remove("active");
  document.getElementById("info-panel").classList.remove("active");
  universe.classList.remove("paused");
}

// Build the default dApps view on load
window.onload = () => buildSolarSystem(dApps);
